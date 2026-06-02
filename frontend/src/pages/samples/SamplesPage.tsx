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
  fieldToHeaderName,
  filterButtonOptions,
  filterButtonsTooltipContent,
  phiModeSwitchTooltipContent,
  BILLING_FIELDS,
  PHI_FIELDS,
  TUMOR_ONLY_CONTEXT,
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
import { POLL_INTERVAL, ROUTE_PARAMS } from "../../configs/shared";
import {
  CohortBuilderContainer,
  CohortBuilderSample,
} from "../../components/CohortBuilderContainer";
import { CohortBuilderWindow } from "../../components/CohortBuilderWindow";
import { TempoCohortRequest } from "../../generated/graphql";
import { Close, NoteAddOutlined, OpenInNew } from "@material-ui/icons";
import { CustomTooltip } from "../../components/CustomToolTip";
import { SampleHistoryModal } from "../../components/SamplesModal";
import { useParams } from "react-router-dom";
import { useUserEmail } from "../../contexts/UserEmailContext";
import { useCellDoubleClicked } from "../../hooks/useCellDoubleClicked";

const QUERY_NAME = "dashboardSamples";
const INITIAL_SORT_FIELD_NAME = "importDate";
const RECORD_NAME = "samples";

export function SamplesPage() {
  const [userSearchVal, setUserSearchVal] = useState("");
  const hasParams = Object.keys(useParams()).length > 0;
  const smileSampleId = useParams()[ROUTE_PARAMS.samples];
  const [colDefs, setColDefs] = useState(filterButtonOptions[0].colDefs);
  const [recordContexts, setRecordContexts] = useState(
    filterButtonOptions[0].recordContexts
  );
  const gridRef = useRef<AgGridReactType<DashboardSample>>(null);
  const cohortBuilderRef = useRef<HTMLDivElement>(null);
  const [selectedRowIds, setSelectedRowIds] = useState<CohortBuilderSample[]>(
    []
  );
  const [cohortBuilderMode, setCohortBuilderMode] = useState<
    "hidden" | "inline" | "window"
  >("hidden");
  const [tempoCohortRequest, setTempoCohortRequest] =
    useState<TempoCohortRequest>({
      cohortId: "",
      endUsers: "",
      pmUsers: "",
      projectTitle: "",
      projectSubtitle: "",
      samples: [],
      type: "investigator",
      status: "PROVISIONAL",
    });

  const showCohortBuilder = cohortBuilderMode !== "hidden";

  function handleCohortBuilderClose() {
    setCohortBuilderMode("hidden");
    setSelectedRowIds([]);
    gridRef.current?.api?.deselectAll();
    setTempoCohortRequest({
      cohortId: "",
      endUsers: "",
      pmUsers: "",
      projectTitle: "",
      projectSubtitle: "",
      samples: [],
      type: "investigator",
      status: "PROVISIONAL",
    });
  }

  function handleCohortBuilderPopOut() {
    setCohortBuilderMode("window");
  }

  const [selectedFilterLabel, setSelectedFilterLabel] = useState(
    filterButtonOptions[0].label
  );
  const { userEmail } = useUserEmail();
  const { handleCellDoubleClicked } = useCellDoubleClicked();

  const isWesAndLoggedIn = selectedFilterLabel === "WES" && !!userEmail;
  const disableCohortBuildling = !isWesAndLoggedIn;
  const includeDemographics = isWesAndLoggedIn;

  const effectiveRecordContexts =
    showCohortBuilder && !disableCohortBuildling
      ? [...(recordContexts ?? []), ...TUMOR_ONLY_CONTEXT]
      : recordContexts;

  // Reset cohort builder when transitioning from enabled to disabled
  const prevIsWesAndLoggedIn = useRef(isWesAndLoggedIn);
  useEffect(() => {
    if (prevIsWesAndLoggedIn.current && !isWesAndLoggedIn) {
      gridRef.current?.api?.deselectAll();
      setSelectedRowIds([]);
      setCohortBuilderMode("hidden");
    }
    prevIsWesAndLoggedIn.current = isWesAndLoggedIn;
  }, [isWesAndLoggedIn]);

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
    recordContexts: effectiveRecordContexts,
    pollInterval: POLL_INTERVAL,
    includeDemographics,
  });

  useEffect(() => {
    if (gridRef.current && gridRef.current.columnApi) {
      if (showCohortBuilder && !disableCohortBuildling) {
        gridRef.current.columnApi.setColumnsVisible(["selected"], true);
      } else {
        gridRef.current.columnApi.setColumnsVisible(["selected"], false);
      }
    }
    if (gridRef.current?.api) {
      refreshData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCohortBuilder, disableCohortBuildling]);

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
    setSelectedFilterLabel(filterButtonLabel);

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

  // When not logged in, remove PHI and billing columns from the ColDefs entirely
  // so they don't appear in AG Grid's column menu or any other UI surface.
  // When logged in, pass the full ColDefs (PHI visibility is then controlled by
  // the phiEnabled + search toggle; billing columns are always visible).
  const authFilteredColDefs = userEmail
    ? colDefs
    : colDefs.filter(
        (col) => !PHI_FIELDS.has(col.field!) && !BILLING_FIELDS.has(col.field!)
      );

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
              fieldToHeaderName={fieldToHeaderName}
            />
          )}
        </Col>

        <Col className="text-end">
          {disableCohortBuildling ? (
            <CustomTooltip
              icon={
                <Button
                  style={{ marginRight: 5, border: "none", padding: 3 }}
                  onClick={() => setCohortBuilderMode("inline")}
                  title="Build a new cohort for TEMPO processing"
                  disabled
                >
                  <NoteAddOutlined />
                </Button>
              }
            >
              Must be on the WES tab and logged in to access cohort builder
            </CustomTooltip>
          ) : (
            <Button
              style={{ marginRight: 5, border: "none", padding: 3 }}
              onClick={() => setCohortBuilderMode("inline")}
              title="Build a new cohort for TEMPO processing"
            >
              <NoteAddOutlined />
            </Button>
          )}
          <DownloadButton
            downloadOptions={downloadOptions}
            onDownload={handleDownload}
          />
        </Col>
      </Toolbar>
      <div
        ref={cohortBuilderRef}
        className="d-flex flex-row flex-grow-1"
        style={{ minHeight: 0 }}
      >
        <DataGrid
          gridRef={gridRef}
          colDefs={authFilteredColDefs}
          refreshData={refreshData}
          changes={changes}
          handleCellEditRequest={handleCellEditRequest}
          handlePaste={handlePaste}
          selectedRowIds={selectedRowIds}
          onSelectionChanged={setSelectedRowIds}
          onCellDoubleClicked={handleCellDoubleClicked}
        />
        {cohortBuilderMode === "inline" && (
          <div className="cohort-builder-inline-panel">
            <div className="cohort-builder-inline-header">
              <span>Cohort Builder</span>
              <div className="d-flex gap-2 align-items-center">
                <button
                  onClick={handleCohortBuilderPopOut}
                  title="Open in floating window"
                  className="cohort-builder-close-btn"
                >
                  <OpenInNew fontSize="small" />
                </button>
                <button
                  onClick={handleCohortBuilderClose}
                  title="Close cohort builder"
                  className="cohort-builder-close-btn"
                >
                  <Close fontSize="small" />
                </button>
              </div>
            </div>
            <div className="cohort-builder-inline-body">
              <CohortBuilderContainer
                gridRef={gridRef}
                selectedRowIds={selectedRowIds}
                setSelectedRowIds={setSelectedRowIds}
                onClose={handleCohortBuilderClose}
                tempoCohortRequest={tempoCohortRequest}
                setTempoCohortRequest={setTempoCohortRequest}
              />
            </div>
          </div>
        )}
      </div>

      {cohortBuilderMode === "window" && (
        <CohortBuilderWindow
          containerRef={cohortBuilderRef}
          onClose={handleCohortBuilderClose}
          onSnapToSide={() => setCohortBuilderMode("inline")}
        >
          <CohortBuilderContainer
            gridRef={gridRef}
            selectedRowIds={selectedRowIds}
            setSelectedRowIds={setSelectedRowIds}
            onClose={handleCohortBuilderClose}
            tempoCohortRequest={tempoCohortRequest}
            setTempoCohortRequest={setTempoCohortRequest}
          />
        </CohortBuilderWindow>
      )}

      {isDownloading && <DownloadModal />}

      {hasParams && smileSampleId && (
        <SampleHistoryModal
          recordContext={{
            fieldName: "smileSampleId",
            values: [smileSampleId],
          }}
          parentRecordName="samples"
        />
      )}
    </DataGridLayout>
  );
}
