import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerContext, neo4jDriver } from "../utils/servers";
import {
  DashboardCohort,
  DashboardCohortInput,
  DashboardSampleInput,
  PatientIdsTriplet,
  QueryDashboardCohortsArgs,
  QueryDashboardPatientsArgs,
  QueryDashboardRequestsArgs,
  QueryDashboardSamplesArgs,
  SeqDateAccessionBySampleId,
  TempoCohortRequestInput,
} from "../generated/graphql";
import { props } from "../utils/constants";
import { connect, headers, StringCodec } from "nats";
import { OGM } from "@neo4j/graphql-ogm";
import {
  buildPatientsQueryBody,
  buildPatientsQueryFinal,
  mapPhiToPatientsData,
  queryAllAnchorSeqDateData,
  queryAnchorSeqDateData,
  queryDashboardPatients,
  queryPatientIdsTriplets,
} from "./queries/patients";
import {
  buildCohortsQueryBody,
  queryDashboardCohorts,
} from "./queries/cohorts";
import {
  buildSamplesQueryBody,
  buildSamplesQueryFinal,
  getAddlOtCodesMatchingCtOrCtdVals,
  mapPhiToSamplesData,
  queryDashboardSamples,
  querySeqDatesByDmpSampleId,
} from "./queries/samples";
import {
  ONCOTREE_CACHE_KEY,
  OncotreeCache,
  PATIENT_DEMOGRAPHICS_CACHE_KEY,
  PatientDemographicsCache,
  SAMPLES_CACHE_KEY,
  SamplesCache,
  updateCacheWithNewSampleUpdates,
} from "../utils/cache";
import {
  buildRequestsQueryBody,
  queryDashboardRequests,
} from "./queries/requests";
import { typeDefs } from "../utils/typeDefs";
const request = require("request-promise-native");
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { IMiddlewareResolver } from "graphql-middleware/dist/types";
import { chain } from "lodash";
import { randomUUID } from "crypto";

const KEYCLOAK_PHI_ACCESS_GROUP = "mrn-search";

type AuthMiddleware = {
  Query: {
    dashboardSamples: IMiddlewareResolver;
    dashboardPatients: IMiddlewareResolver;
    allAnchorSeqDateData: IMiddlewareResolver;
    allBlockedCohortIds: IMiddlewareResolver;
  };
};

/**
 * Search values are required for PHI searching to restrict PHI data to specific patients searched
 * for by users
 */
function canSearchPhiData({
  phiEnabled,
  searchVals,
  searchValsIsRequired = true,
}: {
  phiEnabled?: boolean | null;
  searchVals?: string[] | null;
  searchValsIsRequired?: boolean;
}) {
  if (searchValsIsRequired) {
    return phiEnabled && Array.isArray(searchVals) && searchVals.length > 0;
  }
  return phiEnabled;
}

export async function buildCustomSchema(ogm: OGM) {
  const authenticationMiddleware: AuthMiddleware = {
    Query: {
      async dashboardSamples(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchVals: args.searchVals,
          }) &&
          !context.req.isAuthenticated()
        ) {
          throw new AuthenticationError(
            "You must be logged in to access this resource."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async dashboardPatients(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchVals: args.searchVals,
          }) &&
          !context.req.isAuthenticated()
        ) {
          throw new AuthenticationError(
            "You must be logged in to access this resource."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async allAnchorSeqDateData(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          !canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchValsIsRequired: false,
          }) ||
          !context.req.isAuthenticated()
        ) {
          throw new AuthenticationError(
            "You must be logged in to access this resource."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async allBlockedCohortIds() {
        return queryAllBlockedCohortIds();
      },
    },
  };

  const authorizationMiddleware: AuthMiddleware = {
    Query: {
      async dashboardSamples(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchVals: args.searchVals,
          }) &&
          !context.req.user.groups.includes(KEYCLOAK_PHI_ACCESS_GROUP)
        ) {
          throw new ForbiddenError(
            "You do not have permission to access this resource. Please contact the SMILE team for assistance."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async dashboardPatients(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchVals: args.searchVals,
          }) &&
          !context.req.user.groups.includes(KEYCLOAK_PHI_ACCESS_GROUP)
        ) {
          throw new ForbiddenError(
            "You do not have permission to access this resource. Please contact the SMILE team for assistance."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async allAnchorSeqDateData(
        resolve,
        parent,
        args: QueryDashboardPatientsArgs,
        context: ApolloServerContext,
        info
      ) {
        if (
          !canSearchPhiData({
            phiEnabled: args.phiEnabled,
            searchValsIsRequired: false,
          }) ||
          !context.req.user.groups.includes(KEYCLOAK_PHI_ACCESS_GROUP)
        ) {
          throw new ForbiddenError(
            "You do not have permission to access this resource. Please contact the SMILE team for assistance."
          );
        }
        return await resolve(parent, args, context, info);
      },

      async allBlockedCohortIds() {
        return queryAllBlockedCohortIds();
      },
    },
  };

  const resolvers = {
    Query: {
      async dashboardRequests(
        _source: undefined,
        {
          searchVals,
          columnFilters,
          sort,
          limit,
          offset,
        }: QueryDashboardRequestsArgs
      ) {
        const queryBody = buildRequestsQueryBody({ searchVals, columnFilters });
        return await queryDashboardRequests({
          queryBody,
          sort,
          limit,
          offset,
        });
      },

      async dashboardPatients(
        _source: undefined,
        {
          searchVals,
          columnFilters,
          sort,
          limit,
          offset,
          phiEnabled,
        }: QueryDashboardPatientsArgs
      ) {
        let patientIdsTriplets: Array<PatientIdsTriplet> = [];
        if (searchVals && canSearchPhiData({ phiEnabled, searchVals })) {
          patientIdsTriplets = await queryPatientIdsTriplets(searchVals);
          const mappedPatientIds = patientIdsTriplets
            .flatMap((triplet) => [
              triplet.DMP_PATIENT_ID,
              triplet.CMO_PATIENT_ID,
            ])
            .filter((id): id is string => !!id && !searchVals.includes(id));
          searchVals.push(...mappedPatientIds);
        }

        const queryBody = buildPatientsQueryBody({
          searchVals,
          columnFilters,
        });
        const queryFinal = buildPatientsQueryFinal({
          queryBody,
          sort,
          limit,
          offset,
        });
        const patientsDataPromise = queryDashboardPatients(queryFinal);

        if (!canSearchPhiData({ phiEnabled, searchVals })) {
          return await patientsDataPromise;
        }

        const allMappedPatientIds = patientIdsTriplets
          .flatMap((triplet) => [
            triplet.MRN,
            triplet.DMP_PATIENT_ID,
            triplet.CMO_PATIENT_ID,
          ])
          .filter((id): id is string => !!id);
        const [patientsData, anchorSeqDateData] = await Promise.all([
          patientsDataPromise,
          queryAnchorSeqDateData(allMappedPatientIds),
        ]);

        return mapPhiToPatientsData({
          patientsData,
          patientIdsTriplets,
          anchorSeqDateData,
        });
      },

      async allAnchorSeqDateData() {
        return await queryAllAnchorSeqDateData();
      },

      async allBlockedCohortIds() {
        return await queryAllBlockedCohortIds();
      },

      async dashboardCohorts(
        _source: undefined,
        {
          searchVals,
          columnFilters,
          sort,
          limit,
          offset,
        }: QueryDashboardCohortsArgs
      ) {
        const queryBody = buildCohortsQueryBody({ searchVals, columnFilters });
        return await queryDashboardCohorts({
          queryBody,
          sort,
          limit,
          offset,
        });
      },

      async dashboardSamples(
        _source: undefined,
        {
          searchVals,
          recordContexts,
          sort,
          columnFilters,
          limit,
          offset,
          phiEnabled,
          includeDemographics,
        }: QueryDashboardSamplesArgs,
        { inMemoryCache }: ApolloServerContext
      ) {
        const oncotreeCache = inMemoryCache.get(
          ONCOTREE_CACHE_KEY
        ) as OncotreeCache;
        const samplesCache = inMemoryCache.get(
          SAMPLES_CACHE_KEY
        ) as SamplesCache;
        const patientDemographicsCache = inMemoryCache.get(
          PATIENT_DEMOGRAPHICS_CACHE_KEY
        ) as PatientDemographicsCache;

        // if phi enabled, query for possible mapped sample ids to add to search vals list while removing phi searchables from search vals list
        let dmpSampleSeqDateAccessions: Array<SeqDateAccessionBySampleId> = [];
        if (searchVals && canSearchPhiData({ phiEnabled, searchVals })) {
          dmpSampleSeqDateAccessions = await querySeqDatesByDmpSampleId(
            searchVals
          );
          let mappedSampleIds: string[] = [];
          let toRemove: string[] = [];
          dmpSampleSeqDateAccessions.forEach((v) => {
            if (
              v.DMP_SAMPLE_ID &&
              searchVals &&
              !searchVals.includes(v.DMP_SAMPLE_ID)
            ) {
              mappedSampleIds.push(v.DMP_SAMPLE_ID);
            }
            if (
              v.MOLECULAR_ACCESSION_NUMBER &&
              searchVals &&
              searchVals.includes(v.MOLECULAR_ACCESSION_NUMBER)
            ) {
              toRemove.push(v.MOLECULAR_ACCESSION_NUMBER);
            }
          });
          searchVals.push(...mappedSampleIds);
          searchVals = searchVals.filter((val) => !toRemove.includes(val));
        }

        const addlOncotreeCodes = getAddlOtCodesMatchingCtOrCtdVals({
          searchVals,
          oncotreeCache,
        });

        const queryBody = buildSamplesQueryBody({
          searchVals,
          recordContexts,
          columnFilters,
          addlOncotreeCodes,
        });

        const samplesCypherQuery = buildSamplesQueryFinal({
          queryBody,
          sort,
          limit,
          offset,
        });

        if (samplesCache && samplesCypherQuery in samplesCache) {
          return samplesCache[samplesCypherQuery];
        }

        const samplesDataPromise = queryDashboardSamples({
          samplesCypherQuery,
          oncotreeCache,
          patientDemographicsCache,
        });

        if (!canSearchPhiData({ phiEnabled, searchVals })) {
          return await samplesDataPromise;
        }

        const [samplesData, seqDatesBySampleId] = await Promise.all([
          samplesDataPromise,
          querySeqDatesByDmpSampleId(searchVals!),
        ]);

        return mapPhiToSamplesData({
          samplesData,
          seqDatesBySampleId,
        });
      },
    },

    Mutation: {
      async updateDashboardSamples(
        _source: undefined,
        {
          newDashboardSamples,
        }: { newDashboardSamples: DashboardSampleInput[] },
        { inMemoryCache }: ApolloServerContext
      ) {
        await updateAllSamplesConcurrently(newDashboardSamples, ogm);
        await updateCacheWithNewSampleUpdates(
          newDashboardSamples,
          inMemoryCache
        );

        // Here, we're returning newDashboardSamples for simplicity. However, if we were to follow
        // GraphQL's convention, we'd return the actual resulting data from the database update. This
        // means we'd wait for SMILE services to finish processing the data changes, then query that
        // data to return it to the frontend. For more context, see:
        // https://www.apollographql.com/docs/react/performance/optimistic-ui/#optimistic-mutation-lifecycle
        return newDashboardSamples;
      },
      async updateTempoCohort(
        _source: undefined,
        {
          dashboardCohort,
        }: {
          dashboardCohort: DashboardCohortInput;
        }
      ) {
        await updateTempoCohortPromise(dashboardCohort);
      },
      async publishNewTempoCohortRequest(
        _source: undefined,
        {
          tempoCohortRequest,
        }: {
          tempoCohortRequest: TempoCohortRequestInput;
        }
      ) {
        await publishNewTempoCohortRequestPromise(tempoCohortRequest);
      },
    },
  };

  const executableSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  return applyMiddleware(
    executableSchema,
    authenticationMiddleware,
    authorizationMiddleware
  );
}

async function updateSampleMetadataPromises(
  newDashboardSamples: Array<DashboardSampleInput>,
  ogm: OGM
) {
  const sampleManifests: any[] = [];
  for (const newDashboardSample of newDashboardSamples) {
    const sampleManifest = await request(
      props.smile_sample_endpoint + newDashboardSample.primaryId,
      {
        json: true,
      }
    );

    Object.keys(newDashboardSample).forEach((key) => {
      if (key in sampleManifest) {
        sampleManifest[key] =
          newDashboardSample[key as keyof DashboardSampleInput];
      }
    });
    // promote changelog to additional properties in sample manifest
    sampleManifest.additionalProperties.changelog =
      newDashboardSample.changelog || "";

    // Ensure validator and label generator use latest status data added during validation
    delete sampleManifest.status;

    // Ensure importDate is updated by smile-server, not anywhere else
    delete sampleManifest.importDate;

    // Ensure isCmoSample is set in sample's 'additionalProperties' if not already present
    if (sampleManifest.additionalProperties.isCmoSample == null) {
      // For research samples, this ensures that they get sent to the label generator after
      // validation as some of the older SMILE samples do not have this additionalProperty set
      if (sampleManifest.datasource === "igo") {
        const requestId = sampleManifest.additionalProperties.igoRequestId;
        let requestOgm = ogm.model("Request");
        const requestOfSample = await requestOgm.find({
          where: { igoRequestId: requestId },
        });
        sampleManifest.additionalProperties.isCmoSample =
          requestOfSample[0].isCmoRequest.toString();
      }

      if (sampleManifest.datasource === "dmp") {
        sampleManifest.additionalProperties.isCmoSample = false;
      }
    }

    await ogm.model("Sample").update({
      where: { smileSampleId: sampleManifest.smileSampleId },
      update: { revisable: false },
    });

    sampleManifests.push(sampleManifest);
  }

  return new Promise(async (resolve) => {
    publishNatsMessage(
      props.pub_validate_sample_update,
      JSON.stringify(sampleManifests)
    );
    resolve(null);
  });
}

async function updateTempoPromise(newDashboardSample: DashboardSampleInput) {
  return new Promise((resolve) => {
    const dataForTempoBillingUpdate = {
      primaryId: newDashboardSample.primaryId,
      billed: newDashboardSample.billed,
      billedBy: newDashboardSample.billedBy,
      costCenter: newDashboardSample.costCenter,
      accessLevel: newDashboardSample.accessLevel,
      custodianInformation: newDashboardSample.custodianInformation,
    };

    publishNatsMessage(
      props.pub_tempo_sample_billing,
      JSON.stringify(dataForTempoBillingUpdate)
    );

    resolve(null);
  });
}

async function publishNewTempoCohortRequestPromise(
  tempoCohortRequest: TempoCohortRequestInput
) {
  return new Promise((resolve) => {
    publishNatsMessage(
      props.pub_tempo_new_cohort_submit,
      JSON.stringify(tempoCohortRequest)
    );
    resolve(null);
  });
}

async function updateDbGapPromise(newDashboardSample: DashboardSampleInput) {
  return new Promise((resolve) => {
    const dataForDbGapUpdate = {
      primaryId: newDashboardSample.primaryId,
      dbGapStudy: newDashboardSample.dbGapStudy,
      irbConsentProtocol: newDashboardSample.irbConsentProtocol,
    };

    publishNatsMessage(
      props.pub_dbgap_sample_update,
      JSON.stringify(dataForDbGapUpdate)
    );

    resolve(null);
  });
}

async function updateTempoCohortPromise(dashboardCohort: DashboardCohort) {
  return new Promise((resolve) => {
    const dataForTempoCohortUpdate = {
      cohortId: dashboardCohort.cohortId,
      date: dashboardCohort.initialCohortDeliveryDate,
      type: dashboardCohort.type,
      endUsers: formatUsersString(dashboardCohort.endUsers || ""),
      pmUsers: formatUsersString(dashboardCohort.pmUsers || ""),
      status: dashboardCohort.status,
      projectTitle: dashboardCohort.projectTitle,
      projectSubtitle: dashboardCohort.projectSubtitle,
      //pipelineVersion: to be added soon - will need default value if null/empty
    };
    publishNatsMessage(
      props.pub_tempo_cohort_update,
      JSON.stringify(dataForTempoCohortUpdate)
    );
    resolve(null);
  });
}

const EDITABLE_SAMPLEMETADATA_FIELDS = new Set([
  "cmoPatientId",
  "investigatorSampleId",
  "sampleType",
  "preservation",
  "tumorOrNormal",
  "sampleClass",
  "oncotreeCode",
  "collectionYear",
  "sampleOrigin",
  "tissueLocation",
  "sex",
  "changelog",
]);

const EDITABLE_TEMPO_FIELDS = new Set([
  "billed",
  "costCenter",
  "billedBy",
  "custodianInformation",
  "accessLevel",
]);

const EDITABLE_DBGAP_FIELDS = new Set(["dbGapStudy", "irbConsentProtocol"]);

async function updateAllSamplesConcurrently(
  newDashboardSamples: DashboardSampleInput[],
  ogm: OGM
) {
  const samplesWithMetadataUpdates = [];
  const tempoUpdatePromises = [];
  const dbGapUpdatePromises = [];

  for (const dashboardSample of newDashboardSamples) {
    try {
      const { changedFieldNames } = dashboardSample;

      const metadataChanged = changedFieldNames.some((field) =>
        EDITABLE_SAMPLEMETADATA_FIELDS.has(field)
      );
      const tempoChanged = changedFieldNames.some((field) =>
        EDITABLE_TEMPO_FIELDS.has(field)
      );
      const dbGapChanged = changedFieldNames.some((field) =>
        EDITABLE_DBGAP_FIELDS.has(field)
      );

      if (metadataChanged) {
        samplesWithMetadataUpdates.push(dashboardSample);
      }
      if (tempoChanged) {
        tempoUpdatePromises.push(updateTempoPromise(dashboardSample));
      }
      if (dbGapChanged) {
        dbGapUpdatePromises.push(updateDbGapPromise(dashboardSample));
      }
    } catch (error) {
      console.error(
        `Failed to update sample with primaryId ${dashboardSample.primaryId}. Error:`,
        error
      );
      throw error; // ensure Promise.allSettled captures the error
    }
  }
  const allPromises = [...tempoUpdatePromises, ...dbGapUpdatePromises];
  if (samplesWithMetadataUpdates.length > 0) {
    allPromises.push(
      updateSampleMetadataPromises(samplesWithMetadataUpdates, ogm)
    );
  }
  await Promise.allSettled(allPromises);
}

async function publishNatsMessage(topic: string, message: string) {
  const sc = StringCodec();

  const tlsOptions = {
    keyFile: props.nats_key_pem,
    certFile: props.nats_cert_pem,
    caFile: props.nats_ca_pem,
    rejectUnauthorized: false,
  };

  const natsConnProperties = {
    servers: [props.nats_url],
    user: props.nats_username,
    pass: props.nats_password,
    tls: tlsOptions,
  };

  try {
    const natsConn = await connect(natsConnProperties);
    console.info(
      `Publishing message to NATS server at ${natsConn.getServer()} under topic ${topic}: `,
      message
    );
    const h = headers();
    h.append("Nats-Msg-Subject", topic);
    h.append("Nats-Msg-Id", randomUUID());
    natsConn.publish(topic, sc.encode(JSON.stringify(message)), { headers: h });
  } catch (err) {
    console.error(
      `error connecting to ${JSON.stringify(natsConnProperties)}`,
      err
    );
  }
}

async function queryAllBlockedCohortIds() {
  const blockedCohortIds = props.ccs_blocked_cohort_ids
    .split(",")
    .map((id: string) => id.trim());
  const neo4jCohortIds = await getCohortIdsFromNeo4j();
  return new Set([...blockedCohortIds, ...neo4jCohortIds]);
}

async function getCohortIdsFromNeo4j() {
  const session = neo4jDriver.session();
  try {
    const result = await session.run(`
      MATCH (c:Cohort) RETURN DISTINCT c.cohortId AS cohortId
    `);
    return result.records.map((record) => record.get("cohortId"));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return [];
  } finally {
    await session.close();
  }
}

function formatUsersString(val: string) {
  return (
    chain(val)
      // Split on space and comma delimiters, but ignore them inside single/double quotes. Breakdown:
      // [\s,]+ matches >= 1 whitespace/comma characters
      // (?=...) is a positive lookahead, "match the previous pattern only if it's followed by ..."
      // (?:...) is a non-capturing group that groups the pattern inside it without capturing it
      // [^'"] matches any non-quote character
      // '[^']*' and "[^"]*" match single and double quoted strings, respectively
      // *$ asserts that the lookahead pattern occurs >= 0 times until the end of the string
      .split(/[\s,]+(?=(?:[^'"]|'[^']*'|"[^"]*")*$)/)
      .compact()
      .uniq()
      .map((val) => {
        // handle users entering full email addresses just in case
        return val.split("@")[0].trim();
      })
      .value()
  );
}
