import { AgGridReact } from "ag-grid-react";
import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact";
import { RefObject, ClipboardEvent, useState, useEffect } from "react";
import {
  CellEditRequestEvent,
  ColDef,
  ITooltipParams,
} from "ag-grid-community";
import { useNavigate } from "react-router-dom";
import { createCustomHeader, lockIcon } from "../configs/gridIcons";
import { RecordChange } from "../types/shared";
import { CACHE_BLOCK_SIZE } from "../configs/shared";
import { allEditableFields } from "../pages/samples/config";
import { CohortBuilderSample } from "./CohortBuilderContainer";

function getTooltipValue(params: ITooltipParams) {
  if (!params.colDef || !("field" in params.colDef)) return undefined;
  const field = params.colDef.field;
  if (
    (field === "cancerType" || field === "cancerTypeDetailed") &&
    params.value === "N/A"
  ) {
    return (
      "This code might have changed between different versions of the Oncotree API. " +
      "For more details, visit oncotree.mskcc.org/mapping"
    );
  }
  if (
    allEditableFields.has(field!) &&
    params.data?.sampleCategory === "clinical"
  ) {
    return "Clinical samples are not editable";
  }
  if (!allEditableFields.has(field!)) {
    return "This column is read-only";
  }
}

export function AgGridCustomTooltip(props: ITooltipParams) {
  return (
    <div className="ag-custom-tooltip">
      <span>{props.value}</span>
    </div>
  );
}

const defaultColDef: ColDef = {
  sortable: true,
  resizable: true,
  editable: false,
  headerComponentParams: createCustomHeader(lockIcon),
  tooltipValueGetter: (params: ITooltipParams) => getTooltipValue(params),
  tooltipComponent: AgGridCustomTooltip,
};

interface EditableGridProps {
  changes: Array<RecordChange>;
  handleCellEditRequest: (params: CellEditRequestEvent) => Promise<void>;
  handlePaste: (e: ClipboardEvent<HTMLDivElement>) => void;
}

interface NonEditableGridProps {
  changes?: undefined;
  handleCellEditRequest?: undefined;
  handlePaste?: undefined;
}

interface DataGridPropsBase {
  gridRef: RefObject<AgGridReactType<any>>;
  colDefs: Array<ColDef<any>>;
  refreshData: () => void;
  selectedRowIds: CohortBuilderSample[];
  onSelectionChanged: (
    ids:
      | CohortBuilderSample[]
      | ((prev: CohortBuilderSample[]) => CohortBuilderSample[])
  ) => void;
}

type DataGridProps = DataGridPropsBase &
  // Ensure that either all editing props are used or none are
  (EditableGridProps | NonEditableGridProps);

export function DataGrid({
  gridRef,
  colDefs,
  refreshData,
  changes,
  handleCellEditRequest,
  handlePaste,
  selectedRowIds,
  onSelectionChanged,
}: DataGridProps) {
  const navigate = useNavigate();

  // ensures that records removed from CohortBuilder table also updates selection in main DataGrid table
  useEffect(() => {
    if (gridRef.current && gridRef.current.api) {
      gridRef.current.api.forEachNode((node: any) => {
        const shouldBeSelected = selectedRowIds.some(
          (item) => item.primaryId === node.data?.primaryId
        );
        if (node.isSelected() !== shouldBeSelected) {
          node.setSelected(shouldBeSelected);
        }
      });
    }
  }, [selectedRowIds, gridRef, colDefs]);

  // Callback for selection change
  const handleGridSelectionChanged = (event: any) => {
    const selectedNodes = event.api.getSelectedNodes();
    const visibleSelected = selectedNodes.map((node: any) => ({
      primaryId: node.data?.primaryId,
      cmoSampleName: node.data?.cmoSampleName,
      mafCompleteStatus: node.data?.mafCompleteStatus,
      sampleCohortIds: node.data?.sampleCohortIds,
      initialPipelineRunDate: node.data?.initialPipelineRunDate,
      embargoDate: node.data?.embargoDate,
    }));

    // compute set of primaryIds currently visible in the grid (loaded blocks)
    const visiblePrimaryIds: string[] = [];
    event.api.forEachNode((node: any) => {
      if (node.data?.primaryId) visiblePrimaryIds.push(node.data.primaryId);
    });

    onSelectionChanged(
      (
        prevSelected:
          | CohortBuilderSample[]
          | ((p: CohortBuilderSample[]) => CohortBuilderSample[])
      ) => {
        // support both functional and direct setter usage
        const prev =
          typeof prevSelected === "function" ? prevSelected([]) : prevSelected;

        // find visible rows from prev that were deselected (visible & not present in visibleSelected)
        const visibleDeselected = prev.filter(
          (p) =>
            visiblePrimaryIds.includes(p.primaryId) &&
            !visibleSelected.some(
              (v: { primaryId: string }) => v.primaryId === p.primaryId
            )
        );

        // keep previous selections except explicit visible deselections
        const keptSelections = prev.filter(
          (p) => !visibleDeselected.some((d) => d.primaryId === p.primaryId)
        );

        // add newly selected visible rows that aren't already kept
        const addedSelections = visibleSelected.filter(
          (id: { primaryId: string }) =>
            !keptSelections.some((k) => k.primaryId === id.primaryId)
        );

        return [...keptSelections, ...addedSelections];
      }
    );
  };

  const handleGetRowId = (params: any) => {
    return params.data?.primaryId
      ? params.data?.primaryId
      : params.data.cohortId
      ? params.data.cohortId
      : params.data.igoRequestId
      ? params.data.igoRequestId
      : params.data.smilePatientId
      ? params.data.smilePatientId
      : undefined;
  };

  return (
    <div className="ag-theme-alpine flex-grow-1" onPaste={handlePaste}>
      <AgGridReact
        ref={gridRef}
        rowModelType="serverSide"
        serverSideInfiniteScroll={true}
        cacheBlockSize={CACHE_BLOCK_SIZE}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        enableRangeSelection={true}
        onFirstDataRendered={(params) => params.columnApi.autoSizeAllColumns()}
        onGridColumnsChanged={() => refreshData()}
        context={{
          getChanges: () => changes,
          navigateFunction: navigate,
        }}
        rowClassRules={{
          unlocked: (params) => params.data?.revisable === true,
          locked: (params) => params.data?.revisable === false,
        }}
        onCellEditRequest={handleCellEditRequest}
        readOnlyEdit={true}
        tooltipShowDelay={0}
        tooltipHideDelay={60000}
        tooltipMouseTrack={true}
        suppressClipboardPaste={true}
        // these props are for checkbox selection
        getRowId={handleGetRowId}
        rowSelection="multiple"
        suppressRowClickSelection={true}
        onSelectionChanged={handleGridSelectionChanged}
      />
    </div>
  );
}
