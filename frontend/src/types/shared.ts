import { ColDef, RowNode } from "ag-grid-community";

export interface RecordChange {
  recordId: string;
  fieldName: string;
  oldValue: string;
  newValue: string;
  rowNode: RowNode;
}

export interface BuildDownloadOptionsParamsBase {
  getCurrentData: () => Promise<Array<any>>;
  currentColDefs: Array<ColDef<any>>;
}
