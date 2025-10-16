import { useRef, useState } from "react";
import { DataGrid } from "../../components/DataGrid";
import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact";
import { useFetchData } from "../../hooks/useFetchData";
import {
  DashboardCohort,
  DashboardSample,
  useDashboardCohortsLazyQuery,
} from "../../generated/graphql";
import { Title } from "../../components/Title";
import { Toolbar } from "../../components/Toolbar";
import { SearchBar } from "../../components/SearchBar";
import { buildDownloadOptions, cohortColDefs } from "./config";
import { Col } from "react-bootstrap";
import { ErrorMessage } from "../../components/ErrorMessage";
import { DownloadButton } from "../../components/DownloadButton";
import { DownloadModal } from "../../components/DownloadModal";
import { useDownload } from "../../hooks/useDownload";
import { DataGridLayout } from "../../components/DataGridLayout";
import { useParams } from "react-router-dom";
import { SamplesModal } from "../../components/SamplesModal";
import { ROUTE_PARAMS } from "../../configs/shared";
import { wesSampleColDefs } from "../samples/config";
import { useCellChanges } from "../../hooks/useCellChanges";
import { CellChangesContainer } from "../../components/CellChangesContainer";

const QUERY_NAME = "dashboardCohorts";
const INITIAL_SORT_FIELD_NAME = "initialCohortDeliveryDate";
const RECORD_NAME = "cohorts";

export function CohortsPage() {
  const [userSearchVal, setUserSearchVal] = useState("");
  const gridRef = useRef<AgGridReactType<DashboardSample>>(null);
  const hasParams = Object.keys(useParams()).length > 0;

  const {
    refreshData,
    recordCount,
    uniqueSampleCount,
    isLoading,
    error,
    data,
    fetchMore,
    startPolling,
    stopPolling,
  } = useFetchData({
    useRecordsLazyQuery: useDashboardCohortsLazyQuery,
    queryName: QUERY_NAME,
    initialSortFieldName: INITIAL_SORT_FIELD_NAME,
    gridRef,
    userSearchVal,
  });

  const { changes, cellChangesHandlers, handleCellEditRequest, handlePaste } =
    useCellChanges({
      gridRef,
      startPolling,
      stopPolling,
      records: data?.[QUERY_NAME],
      refreshData,
      isSampleLevelChanges: false,
    });

  const { isDownloading, handleDownload, getCurrentData } =
    useDownload<DashboardCohort>({
      gridRef,
      downloadFileName: RECORD_NAME,
      fetchMore,
      userSearchVal,
      recordCount,
      queryName: QUERY_NAME,
    });

  // remove selected samples from cohort col defs
  const filteredWesSampleColDefs = wesSampleColDefs.filter(
    (colDef) => colDef.field !== "selected"
  );

  const downloadOptions = buildDownloadOptions({
    getCurrentData,
    currentColDefs: cohortColDefs,
  });

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <DataGridLayout>
      <Title>{RECORD_NAME}</Title>

      <Toolbar>
        <Col />

        <Col md="auto" className="d-flex gap-3 align-items-center">
          <SearchBar
            userSearchVal={userSearchVal}
            setUserSearchVal={setUserSearchVal}
            onSearch={refreshData}
            recordCount={recordCount}
            uniqueSampleCount={uniqueSampleCount}
            isLoading={isLoading}
          />
          {changes.length > 0 && (
            <CellChangesContainer
              changes={changes}
              cellChangesHandlers={cellChangesHandlers}
              isSampleLevelChanges={false}
            />
          )}
        </Col>

        <Col className="text-end">
          <DownloadButton
            downloadOptions={downloadOptions}
            onDownload={handleDownload}
          />
        </Col>
      </Toolbar>

      <DataGrid
        gridRef={gridRef}
        colDefs={cohortColDefs}
        refreshData={refreshData}
        changes={changes}
        handleCellEditRequest={handleCellEditRequest}
        handlePaste={handlePaste}
        selectedRowIds={[]}
        onSelectionChanged={() => {}}
      />

      {hasParams && (
        <SamplesModal
          sampleColDefs={filteredWesSampleColDefs}
          contextFieldName={ROUTE_PARAMS.cohorts}
          parentRecordName={RECORD_NAME}
        />
      )}

      {isDownloading && <DownloadModal />}
    </DataGridLayout>
  );
}
