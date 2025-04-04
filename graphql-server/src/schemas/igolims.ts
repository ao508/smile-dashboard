import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-core";
import { applyMiddleware } from "graphql-middleware";
import { props } from "../utils/constants";

//  type IgoRequestSummaryApiType = {
//   requestId: string;
//   recipe: string;
//   projectManagerName: string;
//   piEmail: string;
//   labHeadName: string;
//   labHeadEmail: string;
//   investigatorName: string;
//   investigatorEmail: string;
//   dataAnalystName: string;
//   dataAnalystEmail: string;
//   otherContactEmails: string;
//   dataAccessEmails: string;
//   qcAccessEmails: string;
//   strand: string;
//   libraryType: string;
//   isCmoRequest: boolean;
//   bicAnalysis: boolean;
//   deliveryDate: number;
//   pooledNormals: string[];
//   samples: any[];
// };

export async function buildIgoLimsSchema() {
  const resolvers = {
    Query: {
      igoLimsRequestJson: async (_: any, { requestId }: any) => {
        // return requestId;
        try {
          const response = await fetch(
            `${props.lims_request_endpoint}/${requestId}`,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Basic ${props.lims_username}:${props.lims_password}`,
              },
            }
          );
          console.log(response);
          if (!response.ok) {
            throw new Error(
              `Failed to fetch the request ${requestId}: ${response.statusText}`
            );
          }
          return (await response.json()) as Promise<any[]>;
        } catch (error) {
          if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
          } else {
            console.error("Unknown error occurred while fetching request data");
          }
          return null;
        }
      },
    },
  };

  const typeDefs = `
    type IgoLimsRequestJson {
      requestId: String!
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
      deliveryDate: Int
      pooledNormals: [String]
      samples: [RequestSampleJson]
  }

  type RequestSampleJson {
    investigatorSampleId: String
    igoSampleId: String
    igoComplete: Boolean
  }

    type Query {
      igoLimsRequestJson(requestId: String!): IgoLimsRequestJson
    }
  
  `;

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //   const typeDefs = `
  //   type IgoLimsRequestJson {
  //     requestId: String!
  //     recipe: String
  //     projectManagerName: String
  //     piEmail: String
  //     labHeadName: String
  //     labHeadEmail: String
  //     investigatorName: String
  //     investigatorEmail: String
  //     dataAnalystName: String
  //     dataAnalystEmail: String
  //     otherContactEmails: String
  //     dataAccessEmails: String
  //     qcAccessEmails: String
  //     strand: String
  //     libraryType: String
  //     isCmoRequest: Boolean
  //     bicAnalysis: Boolean
  //     deliveryDate: Int
  //     pooledNormals: String[]
  //     samples: RequestSampleJson[]
  //   }

  //   type RequestSampleJson {
  //     investigatorSampleId: String
  //     igoSampleId: String
  //     igoComplete: Boolean
  //   }

  //   type Query {
  //     igoLimsRequestJson(requestId: String!): IgoLimsRequestJson
  //   }
  // `;

  // async function fetchRequestFromIgoLims(requestId: string) {
  //   try {
  //     const response = await fetch(`https://igolims.mskcc.org:8443/LimsRest/api/getRequestSamples?request=${requestId}`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Basic metadb:KalalauTrail`
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch the request ${requestId}: ${response.statusText}`
  //       );
  //     }
  //     return (await response.json()) as Promise<IgoRequestSummaryApiType[]>;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.error(`Error: ${error.message}`);
  //     } else {
  //       console.error("Unknown error occurred while fetching request data");
  //     }
  //     return null;
  //   }
  // }

  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  // console.log(schema)
  return schema;
}
