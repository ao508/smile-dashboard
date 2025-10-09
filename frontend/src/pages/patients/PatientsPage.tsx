import { useRef, useState } from "react";
import { DataGrid } from "../../components/DataGrid";
import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact";
import { useFetchData } from "../../hooks/useFetchData";
import {
  DashboardPatient,
  useAllAnchorSeqDateDataLazyQuery,
  useDashboardPatientsLazyQuery,
} from "../../generated/graphql";
import { Title } from "../../components/Title";
import { Toolbar } from "../../components/Toolbar";
import { SearchBar } from "../../components/SearchBar";
import {
  buildDownloadOptions,
  patientColDefs,
  phiModeSwitchTooltipContent,
} from "./config";
import { Col } from "react-bootstrap";
import { ErrorMessage } from "../../components/ErrorMessage";
import { DownloadButton } from "../../components/DownloadButton";
import { DownloadModal } from "../../components/DownloadModal";
import { useDownload } from "../../hooks/useDownload";
import { PhiModeSwitch } from "../../components/PhiModeSwitch";
import { useTogglePhiColumnsVisibility } from "../../hooks/useTogglePhiColumns";
import { DataGridLayout } from "../../components/DataGridLayout";
import { useParams } from "react-router-dom";
import { SamplesModal } from "../../components/SamplesModal";
import { ROUTE_PARAMS } from "../../configs/shared";
import { sampleColDefs } from "../samples/config";
import { usePhiEnabled } from "../../contexts/PhiEnabledContext";
import { useUserEmail } from "../../contexts/UserEmailContext";

const QUERY_NAME = "dashboardPatients";
const INITIAL_SORT_FIELD_NAME = "importDate";
const RECORD_NAME = "patients";
const PHI_FIELDS = new Set([
  "mrn",
  "anchorSequencingDate",
  "anchorOncotreeCode",
]);

export function PatientsPage() {
  const [userSearchVal, setUserSearchVal] = useState("");
  const [colDefs, setColDefs] = useState(patientColDefs);
  const { phiEnabled } = usePhiEnabled();
  const { userEmail } = useUserEmail();
  const gridRef = useRef<AgGridReactType<DashboardPatient>>(null);
  const hasParams = Object.keys(useParams()).length > 0;
  const [queryAllSeqDates] = useAllAnchorSeqDateDataLazyQuery();

  const { refreshData, recordCount, isLoading, error, fetchMore } =
    useFetchData({
      useRecordsLazyQuery: useDashboardPatientsLazyQuery,
      queryName: QUERY_NAME,
      initialSortFieldName: INITIAL_SORT_FIELD_NAME,
      gridRef,
      userSearchVal,
    });

  const { isDownloading, handleDownload, getCurrentData } =
    useDownload<DashboardPatient>({
      gridRef,
      downloadFileName: RECORD_NAME,
      fetchMore,
      userSearchVal,
      recordCount,
      queryName: QUERY_NAME,
    });

  const downloadOptions = buildDownloadOptions({
    getCurrentData,
    currentColDefs: colDefs,
    queryAllSeqDates,
    phiEnabled,
    userEmail,
  });

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
        <Col />

        <Col md="auto" className="d-flex gap-3 align-items-center">
          <SearchBar
            userSearchVal={userSearchVal}
            setUserSearchVal={setUserSearchVal}
            onBeforeSearch={handlePhiColumnsVisibilityBeforeSearch}
            onSearch={refreshData}
            recordCount={recordCount}
            isLoading={isLoading}
          />

          <div className="vr" />

          <PhiModeSwitch>{phiModeSwitchTooltipContent}</PhiModeSwitch>
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
        colDefs={colDefs}
        refreshData={refreshData}
        selectedRowIds={[]}
        onSelectionChanged={() => {}}
      />

      {hasParams && (
        <SamplesModal
          sampleColDefs={sampleColDefs}
          contextFieldName={ROUTE_PARAMS.patients}
          parentRecordName={RECORD_NAME}
          showPhiModeSwitch={true}
        />
      )}

      {isDownloading && <DownloadModal />}
    </DataGridLayout>
  );
}
