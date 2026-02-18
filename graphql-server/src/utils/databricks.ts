import { props } from "../utils/constants";
import { DBSQLClient, DBSQLLogger, LogLevel } from "@databricks/sql";
import { ExecuteStatementOptions } from "@databricks/sql/dist/contracts/IDBSQLSession";
import { ApolloServerContext } from "./servers";
import {
  DmpTrackerRecord,
  QueryDmpTrackerRecordsArgs,
} from "../generated/graphql";
import { partition } from "lodash";
import { isQuotedString } from "./cypher";

const { databricks_server_hostname, databricks_http_path, databricks_token } =
  props;
if (!databricks_server_hostname || !databricks_http_path || !databricks_token) {
  throw new Error(
    "Cannot find Databricks environment variables for " +
      "Server Hostname, HTTP Path, or personal access token."
  );
}

const connectOptions = {
  host: databricks_server_hostname,
  path: databricks_http_path,
  token: databricks_token,
};
const logger = new DBSQLLogger({ level: LogLevel.error });
const client = new DBSQLClient({ logger: logger });
const queryOptions = { runAsync: true } as ExecuteStatementOptions;

export async function queryDatabricks<T>(query: string): Promise<Array<T>> {
  try {
    await client.connect(connectOptions);
    const session = await client.openSession();

    const queryOperation = await session.executeStatement(query, queryOptions);
    const result = await queryOperation.fetchAll();
    await queryOperation.close();

    await session.close();
    await client.close();

    return result as Array<T>;
  } catch (error) {
    await client.close();
    if (error instanceof Error) {
      throw new Error("Error executing query on Databricks: " + error.message);
    }
    return [];
  }
}

/**
 * We use Databricks with serverless compute, which means that the first query to a table can take a
 * longer time to run as Databricks requires spawning a new compute instance first. This function
 * executes a simple query on each Databricks table to reduce the latency from the cold start
 */
export async function warmUpDatabricksTables() {
  const databricksTablesToWarmUp = [
    props.databricks_phi_id_mapping_table,
    props.databricks_seq_dates_by_patient_table,
    props.databricks_seq_dates_by_sample_table,
    props.databricks_cdsi_demographics_table,
    props.databricks_dmp_tracker_table,
  ];
  // Open a single Databricks connection and session to execute all warmup queries concurrently.
  // This is more efficient than opening a new connection for each query using `queryDatabricks()`,
  // which could also lead to race conditions when calling it in the "fire-and-forget" manner
  try {
    await client.connect(connectOptions);
    const session = await client.openSession();

    for (const table of databricksTablesToWarmUp) {
      const query = `SELECT 1 FROM ${table} LIMIT 1`;
      const queryOperation = await session.executeStatement(
        query,
        queryOptions
      );
      await queryOperation.fetchAll();
      await queryOperation.close();
    }

    await session.close();
    await client.close();
  } catch (error) {
    await client.close();
    console.error("Error warming up Databricks tables:", error);
  }
}

export async function warmUpDatabricks(
  _req: ApolloServerContext["req"],
  _res: any,
  next: any
) {
  // Execute warmup queries without `await`-ing the result to let them run quietly in the background
  // and not block the event loop
  warmUpDatabricksTables();
  next();
}

const FIELDS_TO_SEARCH = [
  "sample_status",
  "duplicate_sample",
  "request_reference_number",
  "cmo_plate_id",
  "date_submitted_to_dmp",
  "pm_investigator_notification_status",
  "specimen_type",
  "dmp_sample_id",
  "patient_id",
  "sample_id",
  "wes_id",
  "tumor_or_normal",
  "sample_downstream_application",
  "study_name",
  "primary_investigator",
  "fund_cost_center",
  "tumor_type",
  "baitset",
  "sequencer",
  "data_custodian",
  "tempo_pipeline_status",
  "tempo_output_delivery_date",
  "project_manager",
  "igo_project_number",
  "igo_request_id_edited",
  "request_date",
  "igo_delivery_date",
  "igo_id",
  "alt_id",
  "investigator_sample_id",
  "cmo_comments",
  "chargeback_applied",
  "igo_request_id_not_edited",
  "amount_of_material_requested_ng",
  "dna_input_into_library_ng",
  "barcode_index",
  "truseq_barcode_id",
  "library_concentration_ngul",
  "orginal_dna_concentration",
  "final_amount_ng",
  "provided_amount_ul",
  "well_id",
  "dmp_comment",
  "additional_comments",
  "record_id_copy",
  "record_id",
  "id",
  "created_by",
  "date_created",
  "related_directory",
  "last_modified_by",
  "last_modified_date",
];

export function buildSqlPredicatesFromSearchVals({
  searchVals,
  fieldsToSearch,
}: {
  searchVals: QueryDmpTrackerRecordsArgs["searchVals"];
  fieldsToSearch: string[];
}) {
  if (!searchVals || searchVals.length === 0) return "";

  // Split search values into two arrays: quoted and unquoted values
  const [quotedVals, unquotedVals] = partition(searchVals, (val) =>
    isQuotedString(val)
  );

  return fieldsToSearch
    .map((field) => {
      const conditions = [];
      // Generate fuzzy match predicate for unquoted values
      if (unquotedVals.length) {
        conditions.push(`${field} RLIKE '(?i)(${unquotedVals.join("|")})'`);
      }
      // Generate exact match predicate for quoted values
      if (quotedVals.length) {
        const quotedValsList = quotedVals
          .map((val) => `"${val.slice(1, -1)}"`)
          .join(", ");
        conditions.push(`${field} IN (${quotedValsList})`);
      }
      return conditions.join(" OR ");
    })
    .filter(Boolean)
    .join(" OR ");
}

export async function queryDmpTrackerRecords({
  searchVals,
  columnFilters,
  limit,
  offset,
}: {
  searchVals: QueryDmpTrackerRecordsArgs["searchVals"];
  columnFilters?: QueryDmpTrackerRecordsArgs["columnFilters"];
  limit: number;
  offset: number;
}): Promise<DmpTrackerRecord[]> {
  const sqlPredicates = buildSqlPredicatesFromSearchVals({
    searchVals,
    fieldsToSearch: FIELDS_TO_SEARCH,
  });
  const whereClause = sqlPredicates ? `WHERE ${sqlPredicates}` : "";

  const query = `
    SELECT
      sample_status,
      duplicate_sample,
      request_reference_number,
      cmo_plate_id,
      date_submitted_to_dmp,
      pm_investigator_notification_status,
      specimen_type,
      dmp_sample_id,
      patient_id,
      sample_id,
      wes_id,
      tumor_or_normal,
      sample_downstream_application,
      study_name,
      primary_investigator,
      fund_cost_center,
      tumor_type,
      baitset,
      sequencer,
      data_custodian,
      tempo_pipeline_status,
      tempo_output_delivery_date,
      project_manager,
      igo_project_number,
      igo_request_id_edited,
      request_date,
      igo_delivery_date,
      igo_id,
      alt_id,
      investigator_sample_id,
      cmo_comments,
      chargeback_applied,
      igo_request_id_not_edited,
      amount_of_material_requested_ng,
      dna_input_into_library_ng,
      barcode_index,
      truseq_barcode_id,
      library_concentration_ngul,
      orginal_dna_concentration,
      final_amount_ng,
      provided_amount_ul,
      well_id,
      dmp_comment,
      additional_comments,
      record_id_copy,
      record_id,
      id,
      created_by,
      date_created,
      related_directory,
      last_modified_by,
      last_modified_date,
      COUNT(*) OVER () AS _total
    FROM
      ${props.databricks_dmp_tracker_table}
    ${whereClause}
    LIMIT ${limit}
    OFFSET ${offset}
  `;
  return await queryDatabricks<DmpTrackerRecord>(query);
}
