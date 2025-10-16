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
import { createCustomHeader } from "../../configs/gridIcons";

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
    field: "endUsers",
    headerName: "End Users",
    editable: true,
    headerComponentParams: createCustomHeader(""),
  },
  {
    field: "pmUsers",
    headerName: "PM Users",
    editable: true,
    headerComponentParams: createCustomHeader(""),
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
        return !editableFieldsList.has(params.colDef.field!);
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
      return editableFieldsList.has(params.colDef.field!);
    };
  });
}

setupEditableCohortFields(cohortColDefs, editableCohortFields);
