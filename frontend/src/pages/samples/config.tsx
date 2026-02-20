import { FilterButtonOption } from "../../components/FilterButtons";
import {
  DashboardRecordContext,
  DashboardSample,
} from "../../generated/graphql";
import {
  CellClassParams,
  ColDef,
  ICellRendererParams,
  IHeaderParams,
} from "ag-grid-community";
import { RecordValidation } from "../../components/RecordValidation";
import { SAMPLE_STATUS_MAP } from "../../configs/recordValidationMaps";
import { Check, Launch } from "@material-ui/icons";
import {
  createCustomHeader,
  LoadingIcon,
  lockIcon,
  toolTipIcon,
} from "../../configs/gridIcons";
import { getPhiColDefProps, multiLineColDef } from "../../configs/shared";
import {
  getAgGridBooleanColFilterConfigs,
  getAgGridBooleanValueFormatter,
  getAgGridDateColFilterConfigs,
  isInvalidCostCenter,
} from "../../utils/agGrid";
import _ from "lodash";
import { Link } from "react-router-dom";
import { formatCellDate } from "../../utils/agGrid";
import {
  BuildDownloadOptionsParamsBase,
  RecordChange,
} from "../../types/shared";
import { DownloadOption } from "../../hooks/useDownload";

const WES_SAMPLE_CONTEXT: Array<DashboardRecordContext> = [
  {
    fieldName: "genePanel",
    values: [
      "Agilent_51MB",
      "Agilent_v4_51MB_Human",
      "CustomCapture",
      "IDT_Exome_v1_FP",
      "IDT_Exome_V1_IMPACT468",
      "WES_Human",
      "WholeExomeSequencing",
    ],
  },
];

const ACCESS_SAMPLE_CONTEXT: Array<DashboardRecordContext> = [
  {
    fieldName: "genePanel",
    values: [
      "ACCESS129",
      "ACCESS146",
      "ACCESS148",
      "ACCESS-Heme",
      "ACCESS-HEME-115",
      "HC_ACCESS",
      "HC_Custom",
      "MSK-ACCESS_v1",
      "MSK-ACCESS_v2",
      "HC_CMOCH",
      "CMO-CH",
    ],
  },
  {
    fieldName: "baitSet",
    values: [
      "MSK-ACCESS-v1_0-probesAllwFP",
      "MSK-ACCESS-v1_0-probesAllwFP_GRCh38",
      "MSK-ACCESS-v1_0-probesAllwFP_hg19_sort_BAITS",
      "MSK-ACCESS-v1_0-probesAllwFP_hg37_sort-BAITS",
      "MSK-ACCESS-v2_0-probesAllwFP",
      "ACCESS_HEME_MN1",
      "ACCESS129",
      "ACCESS146",
      "ACCESS148",
      "ACCESS-HEME-115",
      "CMO-CH",
      "MSK-CH",
    ],
  },
];

export const sampleColDefs: Array<ColDef<DashboardSample>> = [
  {
    field: "primaryId",
    headerName: "Primary ID",
  },
  {
    field: "altId",
    headerName: "Alt ID",
  },
  {
    headerName: "Status",
    cellRenderer: (params: ICellRendererParams<DashboardSample>) => {
      if (!params.data) return null;
      const {
        revisable,
        validationStatus,
        validationReport,
        sampleCategory,
        primaryId,
      } = params.data;

      if (revisable === true) {
        return validationStatus === false ||
          (validationStatus === null && sampleCategory !== "clinical") ? (
          <RecordValidation
            validationStatus={validationStatus}
            validationReport={validationReport}
            modalTitle={`Error report for sample ${primaryId}`}
            recordStatusMap={SAMPLE_STATUS_MAP}
          />
        ) : (
          <Check />
        );
      } else {
        return <LoadingIcon />;
      }
    },
    sortable: false,
  },
  {
    field: "cmoSampleName",
    headerName: "CMO Sample Name",
  },
  {
    field: "historicalCmoSampleNames",
    headerName: "Historical CMO Sample Names",
    maxWidth: 300,
    ...multiLineColDef,
  },
  {
    field: "igoDeliveryDate",
    headerName: "IGO Delivery Date",
    ...getAgGridDateColFilterConfigs(),
  },
  {
    field: "importDate",
    headerName: "Last Updated",
    ...getAgGridDateColFilterConfigs(),
  },
  {
    field: "sequencingDate",
    headerName: "Sequencing Date",
    ...getPhiColDefProps({ widthSize: 260 }),
  },
  {
    field: "molecularAccessionNumber",
    headerName: "Molecular Accession Number",
    ...getPhiColDefProps({ widthSize: 260 }),
  },
  {
    field: "cmoPatientId",
    headerName: "CMO Patient ID",
    cellRenderer: (params: any) => {
      if (params.value) {
        return (
          <>
            {params.value}
            {"   "}
            <Link
              to={`/patients/${params.value}`}
              style={{ color: "black", textDecoration: "none" }}
              target="_blank"
            >
              <Launch style={{ height: "16px", width: "16px" }} />
            </Link>
          </>
        );
      } else {
        return <></>;
      }
    },
  },
  {
    field: "investigatorSampleId",
    headerName: "Investigator Sample ID",
  },
  {
    field: "sampleType",
    headerName: "Sample Type",
    cellEditor: "agRichSelectCellEditor",
    cellEditorPopup: true,
    cellEditorParams: {
      values: [
        "Adjacent Normal",
        "Adjacent Tissue",
        "Cell free",
        "Local Recurrence",
        "Metastasis",
        "Normal",
        "Primary",
        "Recurrence",
        "Tumor",
        "Unknown Tumor",
        "Other",
        "",
      ],
    },
  },
  {
    field: "species",
    headerName: "Species",
  },
  {
    field: "genePanel",
    headerName: "Gene Panel",
  },
  {
    field: "baitSet",
    headerName: "Bait Set",
  },
  {
    field: "preservation",
    headerName: "Preservation",
  },
  {
    field: "tumorOrNormal",
    headerName: "Tumor Or Normal",
    cellEditor: "agRichSelectCellEditor",
    cellEditorPopup: true,
    cellEditorParams: {
      values: ["Tumor", "Normal"],
    },
  },
  {
    field: "sampleClass",
    headerName: "Sample Class",
    cellEditor: "agRichSelectCellEditor",
    cellEditorPopup: true,
    cellEditorParams: {
      values: [
        "Biopsy",
        "Blood",
        "CellLine",
        "Exosome",
        "Fingernails",
        "Non-PDX",
        "Organoid",
        "PDX",
        "RapidAutopsy",
        "Resection",
        "Saliva",
        "Xenograft",
        "XenograftDerivedCellLine",
        "cfDNA",
        "other",
        "",
      ],
    },
  },
  {
    field: "oncotreeCode",
    headerName: "Oncotree Code",
  },
  {
    field: "cancerType",
    headerName: "Cancer Type",
    cellRenderer: (params: ICellRendererParams) => (
      <>
        {params.value}{" "}
        {params.value === "N/A" && (
          <span dangerouslySetInnerHTML={{ __html: toolTipIcon }} />
        )}
      </>
    ),
    sortable: false,
  },
  {
    field: "cancerTypeDetailed",
    headerName: "Cancer Type Detailed",
    cellRenderer: (params: ICellRendererParams) => (
      <>
        {params.value}{" "}
        {params.value === "N/A" && (
          <span dangerouslySetInnerHTML={{ __html: toolTipIcon }} />
        )}
      </>
    ),
    sortable: false,
  },
  {
    field: "collectionYear",
    headerName: "Collection Year",
  },
  {
    field: "sampleOrigin",
    headerName: "Sample Origin",
    cellEditor: "agRichSelectCellEditor",
    cellEditorPopup: true,
    cellEditorParams: {
      values: [
        "Block",
        "Bone Marrow Aspirate",
        "Buccal Swab",
        "Buffy Coat",
        "Cell Pellet",
        "Cells",
        "Cerebrospinal Fluid",
        "Core Biopsy",
        "Curls",
        "Cytospin",
        "FFPE",
        "Fine Needle Aspirate",
        "Fingernails",
        "Fresh or Frozen",
        "Organoid",
        "Plasma",
        "Punch",
        "Rapid Autopsy Tissue",
        "Saliva",
        "Slides",
        "Sorted Cells",
        "Tissue",
        "Urine",
        "Viably Frozen Cells",
        "Whole Blood",
        "Other",
        "",
      ],
    },
  },
  {
    field: "tissueLocation",
    headerName: "Tissue Location",
  },
  {
    field: "sex",
    headerName: "Sex",
  },
  {
    field: "recipe",
    headerName: "Recipe",
  },
  {
    field: "sampleCategory",
    headerName: "SMILE Sample Category",
  },
  {
    field: "changelog",
    headerName: "Reason for Change",
    headerTooltip:
      "Mandatory description of reason for making changes to sample metadata (used for auditing purposes).",
    headerComponentParams: createCustomHeader(toolTipIcon),
  },
];

const dbGapPhenotypeColumns: Array<ColDef<DashboardSample>> = [
  {
    field: "cmoPatientId",
    headerName: "SUBJECT_ID",
  },
  {
    field: "cmoSampleName",
    headerName: "SAMPLE_ID",
  },
  {
    field: "sex",
    headerName: "SEX",
  },
  {
    field: "race",
    headerName: "RACE",
  },
  {
    field: "cancerType",
    headerName: "CANCER_TYPE",
  },
  {
    field: "tissueLocation",
    headerName: "BODY_SITE",
  },
  {
    field: "analyteType",
    headerName: "ANALYTE_TYPE",
    valueGetter: (params) => {
      const analyteType = params.data?.analyteType?.toUpperCase() ?? "";
      if (analyteType === "DNA AND RNA") {
        return "DNA/RNA";
      } else {
        return analyteType;
      }
    },
  },
  {
    field: "tumorOrNormal",
    headerName: "IS_TUMOR",
    valueGetter: (params) => {
      const tumorOrNormal = params.data?.tumorOrNormal?.toUpperCase() ?? "";
      if (tumorOrNormal === "TUMOR") {
        return "Y";
      } else if (tumorOrNormal === "NORMAL") {
        return "N";
      } else {
        return "";
      }
    },
  },
  {
    field: "sampleType",
    headerName: "SAMPLE_TYPE",
  },
  {
    field: "cancerType",
    headerName: "HISTOLOGICAL_TYPE",
  },
  {
    field: "cancerTypeDetailed",
    headerName: "HISTOLOGICAL_SUBTYPE",
  },
  {
    field: "baitSet",
    headerName: "SEQUENCING_PANEL",
  },
  {
    field: "platform",
    headerName: "PLATFORM",
  },
  {
    field: "instrumentModel",
    headerName: "INSTRUMENT_MODEL",
  },
];

export const wesSampleColDefs: Array<ColDef<DashboardSample>> = [
  {
    headerName: "Select",
    field: "selected",
    checkboxSelection: true,
    headerTooltip: "Select samples to build a cohort",
    sortable: false,
    hide: true,
    width: 120,
    headerComponentParams: createCustomHeader(""),
  },
  {
    field: "primaryId",
    headerName: "Primary ID",
  },
  {
    field: "altId",
    headerName: "Alt ID",
  },
  {
    field: "cmoSampleName",
    headerName: "CMO Sample Name",
  },
  {
    field: "cmoPatientId",
    headerName: "CMO Patient ID",
    cellRenderer: (params: ICellRendererParams) => {
      if (params.value) {
        return (
          <>
            {params.value}
            {"   "}
            <Link
              to={`/patients/${params.value}`}
              style={{ color: "black", textDecoration: "none" }}
              target="_blank"
            >
              <Launch style={{ height: "16px", width: "16px" }} />
            </Link>
          </>
        );
      } else {
        return <></>;
      }
    },
  },
  {
    field: "historicalCmoSampleNames",
    headerName: "Historical CMO Sample Names",
    maxWidth: 300,
    ...multiLineColDef,
  },
  {
    field: "investigatorSampleId",
    headerName: "Investigator Sample ID",
  },
  {
    field: "dbGapStudy",
    headerName: "dbGaP Study ID",
  },
  {
    field: "irbConsentProtocol",
    headerName: "IRB Consent Protocol",
    headerTooltip: "Consent protocol used for IRB approval",
    headerComponentParams: createCustomHeader(toolTipIcon),
  },
  {
    field: "sampleCohortIds",
    headerName: "Sample Cohort IDs",
  },
  {
    field: "initialPipelineRunDate",
    headerName: "Initial Pipeline Run Date",
    headerTooltip:
      "Date the sample is delivered in a cohort for the first time",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
    width: 250,
  },
  {
    field: "embargoDate",
    headerName: "Embargo Date",
    headerTooltip: "Calculated date; 18 months after Initial Pipeline Run Date",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs({
      // embargoDate is 18 months ahead of initialPipelineRunDate
      maxValidYear: new Date().getFullYear() + 2,
    }),
  },
  {
    field: "billed",
    headerName: "Billed",
    editable: true,
    cellEditor: "agRichSelectCellEditor",
    cellEditorPopup: true,
    cellEditorParams: {
      values: [true, false],
    },
    ...getAgGridBooleanColFilterConfigs(),
    ...getAgGridBooleanValueFormatter({
      trueVal: true,
      falseVal: false,
    }),
  },
  {
    field: "costCenter",
    headerName: "Cost Center/Fund Number",
    cellClassRules: {
      "costCenter-validation-error": (params: CellClassParams) => {
        return isInvalidCostCenter(params.colDef.field!, params.value);
      },
    },
    width: 250,
  },
  {
    field: "billedBy",
    headerName: "Edited By",
    headerTooltip: 'User who last updated the "Billed" status',
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
  },
  {
    field: "custodianInformation",
    headerName: "Data Custodian",
    headerTooltip: "Lab Head Name from IGO Request .json OR added by PM",
    headerComponentParams: createCustomHeader(toolTipIcon),
  },
  {
    field: "accessLevel",
    headerName: "Access Level",
    headerTooltip:
      "Indicates data availability of sample. Default is MSK Embargo for 18 months after Initial Pipeline Run Date, changes to MSK Public after.",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
  },
  {
    field: "sampleType",
    headerName: "Sample Type",
  },
  {
    field: "tumorOrNormal",
    headerName: "Tumor Or Normal",
  },
  {
    field: "bamCompleteDate",
    headerName: "Latest BAM Complete Date",
    headerTooltip: "Most recent date the BAM generation tasks were run",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
    width: 270,
  },
  {
    field: "bamCompleteStatus",
    headerName: "BAM Complete Status",
    headerTooltip: "Indicates whether BAM generation was successful",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 240,
  },
  {
    field: "mafCompleteDate",
    headerName: "Latest MAF Complete Date",
    headerTooltip:
      "Most recent date the MAF generation tasks were run. Valid for tumor samples only",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
    width: 270,
  },
  {
    field: "mafCompleteNormalPrimaryId",
    headerName: "MAF Complete Normal Primary ID",
    headerTooltip:
      "Primary ID of Normal sample that tumor was paired with, for MAF generation",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 310,
  },
  {
    field: "mafCompleteStatus",
    headerName: "MAF Complete Status (Data Eligible for Sharing)",
    headerTooltip:
      "Indicates whether MAF generation was successful. Valid for tumor samples only. For the MSK WES Repository cohort we only included samples with a MAF Complete Status of 'Pass' as well as QC Complete Result of 'Pass' or 'Warn'",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 280,
    wrapHeaderText: true,
  },
  {
    field: "qcCompleteResult",
    headerName: "QC Complete Result",
    headerTooltip:
      "Indicates whether the QC metrics passed the TEMPO pipeline thresholds",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 230,
  },
  {
    field: "qcCompleteReason",
    headerName: "QC Complete Reason",
    headerTooltip:
      "For samples with a QC Complete Result of 'Fail' or 'Warn', indicates reason for that status",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 230,
  },
  {
    field: "genePanel",
    headerName: "Gene Panel",
  },
  {
    field: "baitSet",
    headerName: "Bait Set",
  },
  {
    field: "oncotreeCode",
    headerName: "Oncotree Code",
  },
  {
    field: "cancerType",
    headerName: "Cancer Type",
  },
  {
    field: "cancerTypeDetailed",
    headerName: "Cancer Type Detailed",
    width: 220,
  },
  {
    field: "tissueLocation",
    headerName: "Tissue Location",
  },
  {
    field: "sampleCategory",
    headerName: "SMILE Sample Category",
    width: 230,
  },
  {
    field: "platform",
    headerName: "PLATFORM",
  },
  {
    field: "instrumentModel",
    headerName: "INSTRUMENT_MODEL",
    width: 220,
  },
  {
    field: "qcCompleteDate",
    headerName: "Latest QC Complete Date",
    headerTooltip: "Most recent date the QC tasks were run",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
    width: 260,
  },
  {
    field: "qcCompleteStatus",
    headerName: "QC Complete Status",
    headerTooltip: "Indicates whether QC analysis tasks were completed",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
    width: 220,
  },
  {
    field: "igoSampleStatus",
    headerName: "IGO Sample Status",
  },
  {
    field: "dmpRecommendedCoverage",
    headerName: "Recommended Coverage",
    headerTooltip: "Recommended coverage for DMP samples",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
  },
];

const accessSampleColDefs: Array<ColDef<DashboardSample>> = [
  {
    field: "primaryId",
    headerName: "Primary ID",
  },
  {
    field: "altId",
    headerName: "Alt ID",
  },
  {
    headerName: "Status",
    cellRenderer: (params: ICellRendererParams<DashboardSample>) => {
      if (!params.data) return null;
      const {
        revisable,
        validationStatus,
        validationReport,
        sampleCategory,
        primaryId,
      } = params.data;

      if (revisable === true) {
        return validationStatus === false ||
          (validationStatus === null && sampleCategory !== "clinical") ? (
          <RecordValidation
            validationStatus={validationStatus}
            validationReport={validationReport}
            modalTitle={`Error report for sample ${primaryId}`}
            recordStatusMap={SAMPLE_STATUS_MAP}
          />
        ) : (
          <Check />
        );
      } else {
        return <LoadingIcon />;
      }
    },
    sortable: false,
  },
  {
    field: "cmoSampleName",
    headerName: "CMO Sample Name",
  },
  {
    field: "historicalCmoSampleNames",
    headerName: "Historical CMO Sample Names",
    maxWidth: 300,
    ...multiLineColDef,
  },
  {
    field: "importDate",
    headerName: "Last Updated",
    ...getAgGridDateColFilterConfigs(),
  },
  {
    field: "cmoPatientId",
    headerName: "CMO Patient ID",
  },
  {
    field: "investigatorSampleId",
    headerName: "Investigator Sample ID",
  },
  {
    field: "sampleType",
    headerName: "Sample Type",
  },
  {
    field: "species",
    headerName: "Species",
  },
  {
    field: "genePanel",
    headerName: "Gene Panel",
  },
  {
    field: "baitSet",
    headerName: "Bait Set",
  },
  {
    field: "preservation",
    headerName: "Preservation",
  },
  {
    field: "tumorOrNormal",
    headerName: "Tumor Or Normal",
  },
  {
    field: "sampleClass",
    headerName: "Sample Class",
  },
  {
    field: "oncotreeCode",
    headerName: "Oncotree Code",
  },
  {
    field: "cancerType",
    headerName: "Cancer Type",
  },
  {
    field: "cancerTypeDetailed",
    headerName: "Cancer Type Detailed",
  },
  {
    field: "collectionYear",
    headerName: "Collection Year",
  },
  {
    field: "sampleOrigin",
    headerName: "Sample Origin",
  },
  {
    field: "tissueLocation",
    headerName: "Tissue Location",
  },
  {
    field: "sex",
    headerName: "Sex",
  },
  {
    field: "recipe",
    headerName: "Recipe",
  },
  {
    field: "sampleCategory",
    headerName: "SMILE Sample Category",
  },
  {
    field: "cfDNA2dBarcode",
    headerName: "2D Barcode",
  },
  {
    field: "dmpPatientAlias",
    headerName: "DMP Patient Alias",
  },
  {
    field: "igoSampleStatus",
    headerName: "IGO Sample Status",
  },
];

const editableSampleFields = new Set([
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

const editableWesSampleFields = new Set([
  "billed",
  "costCenter",
  "custodianInformation",
  "accessLevel",
  "dbGapStudy",
  "irbConsentProtocol",
]);

export const allEditableFields = new Set(
  Array.from(editableSampleFields).concat(Array.from(editableWesSampleFields))
);

export function setupEditableSampleFields(
  samplesColDefs: Array<ColDef>,
  editableFieldsList: Set<string>
) {
  samplesColDefs.forEach((colDef) => {
    const newClassRule = {
      unsubmittedChange: (params: CellClassParams) => {
        const changes: Array<RecordChange> = params.context?.getChanges();
        const changedValue = changes?.find((change) => {
          return (
            change.fieldName === params.colDef.field &&
            change.recordId === params.data.primaryId
          );
        });
        return changedValue !== undefined;
      },
      cursorNotAllowed: (params: CellClassParams) => {
        return (
          params.data?.sampleCategory === "clinical" ||
          !editableFieldsList.has(params.colDef.field!)
        );
      },
    };

    if (colDef.cellClassRules) {
      colDef.cellClassRules = {
        ...colDef.cellClassRules,
        ...newClassRule,
      };
    } else {
      colDef.cellClassRules = newClassRule;
    }

    if (colDef.valueGetter === undefined) {
      colDef.valueGetter = (params) => {
        if (params.data && params.colDef.field) {
          const changes: Array<RecordChange> = params.context?.getChanges();
          const changedValue = changes?.find((change) => {
            return (
              change.fieldName === params.colDef.field &&
              change.recordId === params.data.primaryId
            );
          });
          if (changedValue) {
            return changedValue.newValue;
          } else {
            if (params.colDef.field in params.data) {
              return params.data[params.colDef.field];
            } else {
              return "";
            }
          }
        }
      };
    }

    colDef.editable = (params) => {
      return (
        params.data?.sampleCategory !== "clinical" &&
        editableFieldsList.has(params.colDef.field!) &&
        params.data?.revisable === true
      );
    };

    if (!("headerComponentParams" in colDef)) {
      colDef.headerComponentParams = (params: IHeaderParams) => {
        if (!editableFieldsList.has(params.column.getColDef().field!))
          return createCustomHeader(lockIcon);
      };
    }
  });
}

setupEditableSampleFields(sampleColDefs, allEditableFields);
setupEditableSampleFields(wesSampleColDefs, allEditableFields);
setupEditableSampleFields(accessSampleColDefs, allEditableFields);

const combinedSampleColDefs = _.uniqBy(
  [...sampleColDefs, ...wesSampleColDefs, ...accessSampleColDefs],
  "field"
);

export const filterButtonOptions: Array<FilterButtonOption> = [
  {
    label: "All",
    colDefs: combinedSampleColDefs,
    recordContexts: undefined,
  },
  {
    label: "WES",
    colDefs: wesSampleColDefs,
    recordContexts: WES_SAMPLE_CONTEXT,
  },
  {
    label: "ACCESS/CMO-CH",
    colDefs: accessSampleColDefs,
    recordContexts: ACCESS_SAMPLE_CONTEXT,
  },
];

export const filterButtonsTooltipContent =
  "These tabs filter the data and relevant columns displayed in the table." +
  '"All" shows all samples, whereas "WES" and "ACCESS/CMO-CH" show only' +
  "whole exome and MSK-ACCESS/CMO-CH samples, respectively.";

type BuildDownloadOptionsParams = BuildDownloadOptionsParamsBase & {
  // Put additional parameters here if needed
};

export function buildDownloadOptions({
  getCurrentData,
  currentColDefs: currentColumnDefs,
}: BuildDownloadOptionsParams): Array<DownloadOption> {
  return [
    {
      buttonLabel: "Download as TSV",
      columnDefsForDownload: currentColumnDefs,
      dataGetter: getCurrentData,
    },
    {
      buttonLabel: "Download in Phenotype format for dbGaP",
      columnDefsForDownload: dbGapPhenotypeColumns,
      dataGetter: getCurrentData,
    },
  ];
}

export const phiModeSwitchTooltipContent =
  "Turn on this switch to return samples' sequencing dates in the results." +
  " The table will display sequencing dates only after you (1) have logged" +
  " in and (2) just performed a search with specific DMP Sample IDs. Turning" +
  " on this switch for the first time will prompt you to log in if you have" +
  " not already.";
