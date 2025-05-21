import fetch from "node-fetch";
import https from "https";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { props } from "../utils/constants";

export async function buildIgoLimsRestSchema() {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // ⚠️ Bypass SSL certificate verification
  });

  const auth = Buffer.from(
    `${props.igolims_username}:${props.igolims_password}`
  ).toString("base64");

  const resolvers = {
    Query: {
      igoLimsRequest: async (_: any, { requestId }: { requestId: string }) => {
        const url = `${props.igolims_base_url}${
          props.igolims_request_endpoint
        }${encodeURIComponent(requestId)}`;

        console.log("url we are fetching from = ", url);
        try {
          const response = await fetch(url, {
            method: "GET",
            agent: httpsAgent,
            headers: {
              Authorization: `Basic ${auth}`,
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("REST API call failed:", error);
          throw new Error("Failed to fetch request data");
        }
      },
      igoLimsSampleManifest: async (
        _: any,
        { igoSampleId }: { igoSampleId: string }
      ) => {
        const url = `${props.igolims_base_url}${
          props.igolims_sample_endpoint
        }${encodeURIComponent(igoSampleId)}`;

        try {
          const response = await fetch(url, {
            method: "GET",
            agent: httpsAgent,
            headers: {
              Authorization: `Basic ${auth}`,
              Accept: "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error("REST API call failed:", error);
          throw new Error("Failed to fetch request data");
        }
      },
    },
  };

  const typeDefs = `
  type IgoLimsRequestSample {
    investigatorSampleId: String
    igoSampleId: String
    igoComplete: Boolean
  }
  
  type IgoLimsRequest {
    requestId: String
    requestName: String
    recipe: String
    projectManagerName: String
    piEmail: String
    labHeadName: String
    labHeadEmail: String
    investigatorName: String
    investigatorEmail: String
    dataAnalystName: String
    dataAnalystEmail: String
    otherContactEmails: String
    dataAccessEmails: String
    qcAccessEmails: String
    strand: String
    libraryType: String
    isCmoRequest: Boolean
    bicAnalysis: Boolean
    neoAg: Boolean
    deliveryDate: Float
    deliveryPath: String
    samples: [IgoLimsRequestSample]
    pooledNormals: String
  }

type IgoLimsSampleManifest {
  igoId: String
  altid: String
  cmoSampleName: String
  sampleName: String
  cmoSampleClass: String
  cmoPatientId: String
  investigatorSampleId: String
  oncoTreeCode: String
  tumorOrNormal: String
  tissueLocation: String
  specimenType: String
  sampleOrigin: String
  preservation: String
  collectionYear: String
  sex: String
  species: String
  tubeId: String
  cfDNA2dBarcode: String
  baitSet: String
  estimatedPurity: Float
  igoLimsQcReports: [String]   # Assuming strings, adjust if structured
  igoLimsLibraries: [IgoLimsLibrary]
  igoLimsCmoSampleIdFields: IgoLimsCmoSampleIdFields
}

type IgoLimsLibrary {
  barcodeId: String
  barcodeIndex: String
  libraryIgoId: String
  libraryVolume: Float
  libraryConcentrationNgul: Float
  dnaInputNg: Float
  captureConcentrationNm: String
  captureInputNg: String
  captureName: String
  igoLimsRuns: [IgoLimsRun]
}

type IgoLimsRun {
  runMode: String
  runId: String
  flowCellId: String
  readLength: String
  runDate: String
  flowCellLanes: [Int]
  fastqs: [String]
}

type IgoLimsCmoSampleIdFields {
  naToExtract: String
  normalizedPatientId: String
  sampleType: String
  recipe: String
}

  type Query {
    igoLimsRequest(requestId: String!): IgoLimsRequest
    igoLimsSampleManifest(igoSampleId: String!): [IgoLimsSampleManifest]
  }
  `;

  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  // console.log("\n\n\n\n")
  // console.log(schema)
  // console.log("\n\n\n\n")
  return schema;
}
