import { useEffect, useRef, useState } from "react";
import { DataGrid } from "../../components/DataGrid";
import type { AgGridReact as AgGridReactType } from "ag-grid-react";
import { useFetchData } from "../../hooks/useFetchData";
import {
  DashboardSample,
  useDashboardSamplesLazyQuery,
} from "../../generated/graphql";
import { Title } from "../../components/Title";
import { Toolbar } from "../../components/Toolbar";
import { SearchBar } from "../../components/SearchBar";
import {
  buildDownloadOptions,
  filterButtonOptions,
  filterButtonsTooltipContent,
  phiModeSwitchTooltipContent,
} from "./config";
import { Button, Col } from "react-bootstrap";
import { FilterButtons } from "../../components/FilterButtons";
import { ErrorMessage } from "../../components/ErrorMessage";
import { DownloadButton } from "../../components/DownloadButton";
import { DownloadModal } from "../../components/DownloadModal";
import { useDownload } from "../../hooks/useDownload";
import { PhiModeSwitch } from "../../components/PhiModeSwitch";
import { useTogglePhiColumnsVisibility } from "../../hooks/useTogglePhiColumns";
import { useCellChanges } from "../../hooks/useCellChanges";
import { CellChangesContainer } from "../../components/CellChangesContainer";
import { DataGridLayout } from "../../components/DataGridLayout";
import { POLL_INTERVAL } from "../../configs/shared";
import {
  CohortBuilderContainer,
  CohortBuilderSample,
} from "../../components/CohortBuilderContainer";
import { NoteAddOutlined } from "@material-ui/icons";

const QUERY_NAME = "dashboardSamples";
const INITIAL_SORT_FIELD_NAME = "importDate";
const RECORD_NAME = "samples";
const PHI_FIELDS = new Set(["sequencingDate", "molecularAccessionNumber"]);

export function SamplesPage() {
  const [userSearchVal, setUserSearchVal] = useState("");
  const [colDefs, setColDefs] = useState(filterButtonOptions[0].colDefs);
  const [recordContexts, setRecordContexts] = useState(
    filterButtonOptions[0].recordContexts
  );
  const gridRef = useRef<AgGridReactType<DashboardSample>>(null);
  const [selectedRowIds, setSelectedRowIds] = useState<CohortBuilderSample[]>(
    []
  );
  const [showSelectedPopup, setShowSelectedPopup] = useState(false);
  const [disableCohortBuildling, setDisableCohortBuildling] = useState(true);
  const [includeDemographics, setIncludeDemographics] = useState(false);

  const {
    refreshData,
    recordCount,
    isLoading,
    error,
    data,
    fetchMore,
    startPolling,
    stopPolling,
  } = useFetchData({
    useRecordsLazyQuery: useDashboardSamplesLazyQuery,
    queryName: QUERY_NAME,
    initialSortFieldName: INITIAL_SORT_FIELD_NAME,
    gridRef,
    userSearchVal,
    recordContexts,
    pollInterval: POLL_INTERVAL,
    includeDemographics,
  });

  useEffect(() => {
    if (gridRef.current && gridRef.current.columnApi) {
      if (showSelectedPopup && !disableCohortBuildling) {
        gridRef.current.columnApi.setColumnsVisible(["selected"], true);
      } else {
        gridRef.current.columnApi.setColumnsVisible(["selected"], false);
      }
    }
  }, [gridRef, colDefs, showSelectedPopup, disableCohortBuildling]);

  const { changes, cellChangesHandlers, handleCellEditRequest, handlePaste } =
    useCellChanges({
      gridRef,
      startPolling,
      stopPolling,
      records: data?.[QUERY_NAME],
      refreshData,
      isSampleLevelChanges: true,
    });

  const { isDownloading, handleDownload, getCurrentData } =
    useDownload<DashboardSample>({
      gridRef,
      downloadFileName: RECORD_NAME,
      fetchMore,
      userSearchVal,
      recordCount,
      queryName: QUERY_NAME,
      includeDemographics,
    });

  const downloadOptions = buildDownloadOptions({
    getCurrentData,
    currentColDefs: colDefs,
  });

  function handleFilterButtonClick(filterButtonLabel: string) {
    if (filterButtonLabel === "WES") {
      setDisableCohortBuildling(false);
      setIncludeDemographics(true);
    } else {
      // reset everything if not WES or cohort builder disabled
      if (gridRef.current) {
        gridRef.current.api.deselectAll();
      }
      setSelectedRowIds([]);
      setShowSelectedPopup(false);
      setDisableCohortBuildling(true);
      setIncludeDemographics(false);
    }

    const selectedFilterButtonOption = filterButtonOptions.find(
      (option) => option.label === filterButtonLabel
    );
    setColDefs(selectedFilterButtonOption!.colDefs);
    setRecordContexts(selectedFilterButtonOption!.recordContexts);
    refreshData();
  }

  const { handlePhiColumnsVisibilityBeforeSearch } =
    useTogglePhiColumnsVisibility({
      setColDefs,
      phiFields: PHI_FIELDS,
      userSearchVal,
    });

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <DataGridLayout>
      <Title>{RECORD_NAME}</Title>

      <Toolbar>
        <Col>
          <FilterButtons
            options={filterButtonOptions}
            onClick={handleFilterButtonClick}
          >
            {filterButtonsTooltipContent}
          </FilterButtons>
        </Col>

        <Col md="auto" className="d-flex gap-3 align-items-center">
          <SearchBar
            userSearchVal={userSearchVal}
            setUserSearchVal={setUserSearchVal}
            onBeforeSearch={handlePhiColumnsVisibilityBeforeSearch}
            onSearch={refreshData}
            recordCount={recordCount}
            isLoading={isLoading}
          />

          {/* Only show PHI mode switch on "All" view */}
          {recordContexts === undefined && (
            <>
              <div className="vr" />
              <PhiModeSwitch>{phiModeSwitchTooltipContent}</PhiModeSwitch>
            </>
          )}

          {changes.length > 0 && (
            <CellChangesContainer
              changes={changes}
              cellChangesHandlers={cellChangesHandlers}
              isSampleLevelChanges={true}
            />
          )}
        </Col>

        <Col className="text-end">
          <Button
            style={{ marginRight: 5, border: "none", padding: 3 }}
            onClick={() => setShowSelectedPopup(true)}
            title="Build a new cohort for TEMPO processing"
            disabled={disableCohortBuildling}
          >
            <NoteAddOutlined />
          </Button>
          <DownloadButton
            downloadOptions={downloadOptions}
            onDownload={handleDownload}
          />
        </Col>
      </Toolbar>
      <DataGrid
        gridRef={gridRef}
        colDefs={colDefs}
        refreshData={refreshData}
        changes={changes}
        handleCellEditRequest={handleCellEditRequest}
        handlePaste={handlePaste}
        selectedRowIds={selectedRowIds}
        onSelectionChanged={setSelectedRowIds}
      />

      {isDownloading && <DownloadModal />}
      <br />
      {showSelectedPopup && (
        <CohortBuilderContainer
          gridRef={gridRef}
          selectedRowIds={selectedRowIds}
          setSelectedRowIds={setSelectedRowIds}
          setShowSelectedPopup={setShowSelectedPopup}
        />
      )}
    </DataGridLayout>
  );
}
