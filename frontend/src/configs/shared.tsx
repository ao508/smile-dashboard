import { ColDef } from "ag-grid-community";

export const POLL_INTERVAL = 5000; // 5s

export const CACHE_BLOCK_SIZE = 500; // number of rows to fetch at a time

/**
 * Placeholder values for the variable parts of route paths.
 * When a page uses one of these params, they're captured from the URL in these
 * variables.
 * For example, in the route `/requests/<igoRequestId>` like `/requests/12345`,
 * the component can access the `12345` value as follows:
 * ```tsx
 * const { igoRequestId } = useParams();
 * ```
 */
export const ROUTE_PARAMS = {
  requests: "igoRequestId",
  patients: "patientId",
  cohorts: "cohortId",
  samples: "smileSampleId",
} as const;

export function getPhiColDefProps({
  widthSize,
}: {
  widthSize: number;
}): ColDef {
  return {
    width: widthSize, // prevent truncation when columns are unhidden
    hide: true,
    cellStyle: { color: "crimson" },
    sortable: false,
  };
}

export const multiLineColDef: ColDef = {
  wrapText: true,
  autoHeight: true,
  cellStyle: {
    wordBreak: "break-word",
    lineHeight: "1.25",
    padding: "6px 18px",
  },
};

export const PHI_WARNING =
  "The information contained in this transmission from Memorial Sloan-Kettering" +
  " Cancer Center is privileged, confidential and protected health" +
  " information (PHI) and it is protected from disclosure under applicable" +
  " law, including the Health Insurance Portability and Accountability Act" +
  " of 1996, as amended (HIPAA). This transmission is intended for the sole" +
  " use of approved individuals with permission and training to access this" +
  " information and PHI. You are notified that your access to this" +
  " transmission is logged. If you have received this transmission in" +
  " error, please immediately delete this information and any attachments" +
  " from any computer.";

export const POLLING_PAUSE_AFTER_UPDATE = 12000; // 12s

export const INVALID_COST_CENTER_WARNING =
  "Please update your Cost Center/Fund Number input as CC#######/##### " +
  "(CC followed by 7 alphanumeric characters, a forward slash, then 5 digits). For example: CC1234567/12345. " +
  "Please note that 5 digit legacy Cost Center formats (#####/#####) will also be accepted temporarily.";

export const NO_CHANGELOG_WARNING =
  "Reason for Change field must be filled in before submitting updates.";

export const CMO_SAMPLE_NAME_OVERWRITE_WARNING =
  "At least 1 sample already has a CMO Sample Name. Proceeding may overwrite existing CMO Sample Names.";

export const MISSING_CMO_PATIENT_ID_WARNING =
  "All samples must have a CMO Patient ID before forcing label generation.";

export const MISSING_FORCE_LABEL_SOFT_FIELDS_WARNING =
  "Some samples have missing values in one or more of the following fields: Sample Type, Gene Panel, Recipe, Bait Set, Sample Origin, Tumor or Normal, Sample Class. Proceeding may result in incomplete label generation.";

export const FORCE_LABEL_REQUIRED_FIELDS = [
  "cmoPatientId",
  "sampleType",
  "genePanel",
  "recipe",
  "baitSet",
  "sampleOrigin",
  "tumorOrNormal",
  "sampleClass",
] as const;

export const FORCE_LABEL_SOFT_REQUIRED_FIELDS =
  FORCE_LABEL_REQUIRED_FIELDS.filter((f) => f !== "cmoPatientId");
