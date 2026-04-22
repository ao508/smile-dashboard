import { DashboardCohort } from "../../generated/graphql";
import {
  CellClassParams,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { Button } from "react-bootstrap";
import {
  getAgGridBooleanColFilterConfigs,
  getAgGridDateColFilterConfigs,
} from "../../utils/agGrid";
import { formatCellDate } from "../../utils/agGrid";
import { DownloadOption } from "../../hooks/useDownload";
import {
  BuildDownloadOptionsParamsBase,
  RecordChange,
} from "../../types/shared";
import {
  createCustomHeader,
  lockIcon,
  toolTipIcon,
  LoadingIcon
} from "../../configs/gridIcons";
import { buildFieldToHeaderName } from "../../utils/fieldToHeaderName";
import { Check } from "@material-ui/icons";
import WarningIcon from "@material-ui/icons/Warning";

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
  ];
}

export const cohortColDefs: ColDef<DashboardCohort>[] = [
  {
    headerName: "View Samples",
    cellRenderer: (params: ICellRendererParams) => {
      return (
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => {
            if (params.data.cohortId !== undefined) {
              params.context.navigateFunction(
                `/cohorts/${params.data.cohortId}`
              );
            }
          }}
        >
          View
        </Button>
      );
    },
    sortable: false,
  },
  {
    field: "cohortId",
    headerName: "Cohort ID",
  },
  {
    field: "cohortStatus",
    headerName: "Cohort Status",
    headerTooltip:
      "The status of the cohort in SMILE (e.g. PROVISONAL, DELIVERED)",
    headerComponentParams: createCustomHeader(lockIcon + toolTipIcon),
  },
  {
    field: "totalSampleCount",
    headerName: "# Samples",
  },
  {
    field: "billed",
    headerName: "Billed",
    ...getAgGridBooleanColFilterConfigs(),
  },
  {
    field: "initialCohortDeliveryDate",
    headerName: "Initial Cohort Delivery Date",
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
  },
  {
    field: "importDate",
    headerName: "Last Date Updated",
    valueFormatter: (params) => formatCellDate(params.value) ?? "",
    ...getAgGridDateColFilterConfigs(),
  },
  {
    field: "pipelineVersion",
    headerName: "TEMPO Pipeline Version",
  },
  {
    field: "endUsers",
    headerName: "End Users",
    editable: true,
    headerComponentParams: createCustomHeader(""), // hides the lock icon
  },
  {
    field: "pmUsers",
    headerName: "PM Users",
    editable: true,
    headerComponentParams: createCustomHeader(""), // hides the lock icon
  },
  {
    field: "projectTitle",
    headerName: "Project Title",
  },
  {
    field: "projectSubtitle",
    headerName: "Project Subtitle",
  },
  {
    field: "status",
    headerName: "Status",
    cellRenderer: (params: ICellRendererParams<DashboardCohort>) => {
      if (!params.data) return null;
      if ((params.data as any).revisable === false) {
        return <LoadingIcon />;
      }
      const status = params.data.status;
      if (status === "PASS") {
        return <Check />;
      }
      if (status) {
        return <WarningIcon className="warning-icon" />;
      }
      return null;
    },
    sortable: false,
  },
  {
    field: "type",
    headerName: "Type",
  },
];

const editableCohortFields = new Set(["endUsers", "pmUsers"]);

export function setupEditableCohortFields(
  cohortColDefs: Array<ColDef>,
  editableFieldsList: Set<string>
) {
  cohortColDefs.forEach((colDef) => {
    const newClassRule = {
      unsubmittedChange: (params: CellClassParams) => {
        const changes: Array<RecordChange> = params.context?.getChanges();
        const changedValue = changes?.find((change) => {
          return (
            change.fieldName === params.colDef.field &&
            change.recordId === params.data.cohortId
          );
        });
        return changedValue !== undefined;
      },
      cursorNotAllowed: (params: CellClassParams) => {
        return (
          !params.context?.userEmail ||
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
              change.recordId === params.data.cohortId
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
        params.context?.userEmail &&
        editableFieldsList.has(params.colDef.field!)
      );
    };
  });
}

setupEditableCohortFields(cohortColDefs, editableCohortFields);

export const fieldToHeaderName = buildFieldToHeaderName(cohortColDefs);
