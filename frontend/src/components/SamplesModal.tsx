import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact";
import { useNavigate, useParams } from "react-router-dom";
import {
  DashboardRecordContext,
  DashboardSample,
  TempoCohortRequest,
  useDashboardSamplesLazyQuery,
} from "../generated/graphql";
import { CohortBuilderPublishButton } from "../components/CohortBuilderPublishButton";
import { useFetchData } from "../hooks/useFetchData";
import { useCellChanges } from "../hooks/useCellChanges";
import { useDownload } from "../hooks/useDownload";
import {
  buildDownloadOptions,
  fieldToHeaderName,
  phiModeSwitchTooltipContent,
} from "../pages/samples/config";
import { useTogglePhiColumnsVisibility } from "../hooks/useTogglePhiColumns";
import { ErrorMessage } from "./ErrorMessage";
import { Title } from "../components/Title";
import { Toolbar } from "../components/Toolbar";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { SearchBar } from "../components/SearchBar";
import { PhiModeSwitch } from "./PhiModeSwitch";
import { CellChangesContainer } from "./CellChangesContainer";
import { DownloadButton } from "../components/DownloadButton";
import { DataGrid } from "./DataGrid";
import { DownloadModal } from "./DownloadModal";
import { ColDef } from "ag-grid-community";
import {
  POLL_INTERVAL,
  ROUTE_PARAMS,
  CMO_SAMPLE_NAME_OVERWRITE_WARNING,
  FORCE_LABEL_SOFT_REQUIRED_FIELDS,
  MISSING_CMO_PATIENT_ID_WARNING,
  MISSING_FORCE_LABEL_SOFT_FIELDS_WARNING,
} from "../configs/shared";
import { RecordChange } from "../types/shared";
import { useCellDoubleClicked } from "../hooks/useCellDoubleClicked";
import {
  useFetchSampleHistory,
  historyColDefs,
  historyAutoGroupColumnDef,
} from "../hooks/useFetchSampleHistory";
import { Refresh } from "@material-ui/icons";
import { useUserEmail } from "../contexts/UserEmailContext";
import { awaitLoginPopup } from "../utils/awaitLoginPopup";
import { CustomTooltip } from "./CustomToolTip";

const QUERY_NAME = "dashboardSamples";
const INITIAL_SORT_FIELD_NAME = "importDate";
const PHI_FIELDS = new Set(["sequencingDate"]);

interface SamplesModalProps {
  sampleColDefs: Array<ColDef>;
  contextFieldName: string;
  parentRecordName: keyof typeof ROUTE_PARAMS;
  showPhiModeSwitch?: boolean;
  showForceLabelButton?: boolean;
  tempoCohortRequest?: TempoCohortRequest;
}

export function SamplesModal({
  sampleColDefs,
  contextFieldName,
  parentRecordName,
  showPhiModeSwitch = false,
  showForceLabelButton = false,
  tempoCohortRequest,
}: SamplesModalProps) {
  const [userSearchVal, setUserSearchVal] = useState("");
  const [colDefs, setColDefs] = useState(sampleColDefs);
  const parentRecordId = useParams()[ROUTE_PARAMS[parentRecordName]];
  const gridRef = useRef<AgGridReactType<DashboardSample>>(null);
  const { handleCellDoubleClicked } = useCellDoubleClicked();
  const { userEmail, setUserEmail } = useUserEmail();
  const [showForceLabelModal, setShowForceLabelModal] = useState(false);
  const [allSamplesForForceLabel, setAllSamplesForForceLabel] = useState<
    DashboardSample[]
  >([]);
  const [isFetchingAllSamples, setIsFetchingAllSamples] = useState(false);

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
    recordContexts: [
      {
        fieldName: contextFieldName,
        values: [parentRecordId!],
      },
    ],
    pollInterval: POLL_INTERVAL,
  });

  const {
    changes,
    setChanges,
    cellChangesHandlers,
    handleCellEditRequest,
    handlePaste,
    handleForceLabelSubmit,
  } = useCellChanges({
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
      downloadFileName: `${parentRecordName.slice(
        0,
        -1
      )}_${parentRecordId}_samples`,
      fetchMore,
      userSearchVal,
      recordCount,
      queryName: QUERY_NAME,
    });

  const downloadOptions = buildDownloadOptions({
    getCurrentData,
    currentColDefs: colDefs,
  });

  const { handlePhiColumnsVisibilityBeforeSearch } =
    useTogglePhiColumnsVisibility({
      setColDefs,
      phiFields: PHI_FIELDS,
      userSearchVal,
    });

  async function handleForceLabelClick() {
    if (!userEmail) {
      const loggedInEmail = await awaitLoginPopup();
      if (!loggedInEmail) return;
      setUserEmail(loggedInEmail);
    }
    setIsFetchingAllSamples(true);
    try {
      const { data: allSamplesData } = await fetchMore({
        variables: {
          searchVals: [],
          offset: 0,
          limit: recordCount,
        },
      });
      const allSamples: DashboardSample[] = allSamplesData?.[QUERY_NAME] ?? [];
      setAllSamplesForForceLabel(allSamples);
      setShowForceLabelModal(true);
    } catch (error) {
      console.error("Failed to fetch all samples for force label:", error);
    } finally {
      setIsFetchingAllSamples(false);
    }
  }

  function handleForceLabelConfirm() {
    if (!userEmail) return;
    setShowForceLabelModal(false);
    const username = userEmail.split("@")[0];
    handleForceLabelSubmit(allSamplesForForceLabel, username);
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <ModalContainerWithClosingWarning
      changes={changes}
      setChanges={setChanges}
      parentRecordName={parentRecordName}
    >
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

          {showPhiModeSwitch && (
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

        <Col className="text-end d-flex gap-2 justify-content-end align-items-center">
          {showForceLabelButton && (
            <CustomTooltip
              icon={
                <Button
                  className="btn btn-secondary"
                  size="sm"
                  onClick={handleForceLabelClick}
                  disabled={recordCount === 0 || isFetchingAllSamples}
                >
                  <Refresh fontSize="small" className="me-1" />
                  {isFetchingAllSamples
                    ? "Loading..."
                    : "Force Label Generation"}
                </Button>
              }
            >
              {!userEmail
                ? "Must be logged in to make changes to sample data"
                : ""}
            </CustomTooltip>
          )}
          {parentRecordName === "cohorts" &&
            tempoCohortRequest &&
            tempoCohortRequest.status === "PROVISIONAL" && (
              <CohortBuilderPublishButton
                tempoCohortRequest={tempoCohortRequest}
                cohortSamples={(data?.[QUERY_NAME] ?? []).map(
                  (s: DashboardSample) => ({
                    primaryId: s.primaryId ?? "",
                    cmoSampleName: s.cmoSampleName ?? "",
                    mafCompleteStatus: s.mafCompleteStatus ?? "",
                    sampleCohortIds: s.sampleCohortIds ?? "",
                    initialPipelineRunDate: s.initialPipelineRunDate ?? null,
                    embargoDate: s.embargoDate ?? null,
                  })
                )}
              />
            )}
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
        selectedRowIds={[]}
        onSelectionChanged={() => {}}
        onCellDoubleClicked={handleCellDoubleClicked}
      />

      {isDownloading && <DownloadModal />}

      {showForceLabelModal && (
        <Modal
          show={true}
          centered
          onHide={() => setShowForceLabelModal(false)}
          className="overlay"
        >
          <Modal.Header closeButton>
            <Modal.Title>Force Label Generation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This will force label generation for{" "}
              <strong>{recordCount}</strong> sample
              {recordCount !== 1 ? "s" : ""} in this request.
            </p>
            {allSamplesForForceLabel.some((s) => s.cmoSampleName) && (
              <p className="text-warning mb-0">
                <strong>Caution:</strong> {CMO_SAMPLE_NAME_OVERWRITE_WARNING}
              </p>
            )}
            <Form.Group className="d-flex align-items-center mt-3">
              <Form.Label className="mb-0 me-2 text-nowrap">
                Reason for Change:
              </Form.Label>
              <Form.Control
                type="text"
                size="sm"
                className="me-3"
                value="Forcing label generation"
                disabled
              />
              <Form.Label className="mb-0 me-2 text-nowrap">Author:</Form.Label>
              <Form.Control
                style={{ width: "30%" }}
                type="text"
                size="sm"
                value={userEmail?.split("@")[0] ?? ""}
                disabled
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {(() => {
              const hasMissingCmoPatientId = allSamplesForForceLabel.some(
                (s) => !s["cmoPatientId"]
              );
              const hasMissingSoftFields = allSamplesForForceLabel.some((s) =>
                FORCE_LABEL_SOFT_REQUIRED_FIELDS.some((field) => !s[field])
              );
              return (
                <>
                  <Button
                    className="btn btn-secondary"
                    onClick={() => setShowForceLabelModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn btn-success"
                    onClick={handleForceLabelConfirm}
                    disabled={hasMissingCmoPatientId}
                  >
                    {hasMissingSoftFields && !hasMissingCmoPatientId
                      ? "Proceed Anyway"
                      : "Submit Updates"}
                  </Button>
                  {hasMissingCmoPatientId && (
                    <span className="changelog-alert">
                      {MISSING_CMO_PATIENT_ID_WARNING}
                    </span>
                  )}
                  {hasMissingSoftFields && !hasMissingCmoPatientId && (
                    <span className="changelog-alert">
                      {MISSING_FORCE_LABEL_SOFT_FIELDS_WARNING}
                    </span>
                  )}
                </>
              );
            })()}
          </Modal.Footer>
        </Modal>
      )}
    </ModalContainerWithClosingWarning>
  );
}

interface SampleHistoryModalProps {
  recordContext: DashboardRecordContext;
  parentRecordName: keyof typeof ROUTE_PARAMS;
}

export function SampleHistoryModal({
  recordContext,
  parentRecordName,
}: SampleHistoryModalProps) {
  const smileSampleId = recordContext.values?.[0] ?? "";

  const {
    diffs,
    isLoading,
    error,
    displayText,
    isDownloading,
    historyDownloadOptions,
    handleDownload,
  } = useFetchSampleHistory(smileSampleId);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <ModalContainerWithClosingWarning
      parentRecordName={parentRecordName}
      displayText={displayText}
    >
      <Toolbar>
        <Col />

        <Col md="auto" className="d-flex gap-3 align-items-center">
          {isLoading && <span>Loading...</span>}
        </Col>

        <Col className="text-end">
          <DownloadButton
            downloadOptions={historyDownloadOptions}
            onDownload={handleDownload}
          />
        </Col>
      </Toolbar>
      <div className="ag-theme-alpine flex-grow-1">
        <AgGridReactType
          rowData={diffs}
          columnDefs={historyColDefs}
          groupRemoveSingleChildren={true}
          autoGroupColumnDef={historyAutoGroupColumnDef}
          groupDefaultExpanded={1}
          onFirstDataRendered={(e) => e.columnApi.autoSizeAllColumns()}
        />
      </div>

      {isDownloading && <DownloadModal />}
    </ModalContainerWithClosingWarning>
  );
}

interface ModalContainerProps {
  changes?: Array<RecordChange>;
  setChanges?: Dispatch<SetStateAction<Array<RecordChange>>>;
  parentRecordName: keyof typeof ROUTE_PARAMS;
  children: ReactNode;
  displayText?: string;
}

function ModalContainerWithClosingWarning({
  changes = [],
  setChanges,
  parentRecordName,
  children,
  displayText,
}: ModalContainerProps) {
  const navigate = useNavigate();
  const parentRecordId = useParams()[ROUTE_PARAMS[parentRecordName]];
  const [showClosingWarning, setShowClosingWarning] = useState(false);

  function handleModalClose() {
    if (changes.length > 0) {
      setShowClosingWarning(true);
    } else {
      navigate(`/${parentRecordName}`);
    }
  }

  function handleClosingWarningCancel() {
    setShowClosingWarning(false);
  }

  function handleClosingWarningContinue() {
    setShowClosingWarning(false);
    setChanges?.([]);
    navigate(`/${parentRecordName}`);
  }

  const parentRecordType = parentRecordName.slice(0, -1);
  const defaultDisplayText = `${parentRecordType} ${parentRecordId}'s samples`;
  const modalDisplayText = displayText ?? defaultDisplayText;
  return (
    <>
      {/* Modal for displaying the data grid */}
      <Modal show={true} dialogClassName="modal-90w" onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Title>{`Viewing ${modalDisplayText}`}</Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popupHeight d-flex flex-column">{children}</div>
        </Modal.Body>
      </Modal>

      {/* Show closing warning when there are unsaved changes */}
      {showClosingWarning && (
        <Modal
          show={true}
          centered
          onHide={handleClosingWarningCancel}
          className="overlay"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Are you sure you want to exit?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Exiting this view will discard all your unsubmitted changes. Click
              "Cancel" to remain in this samples view.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className={"btn btn-secondary"}
              onClick={handleClosingWarningCancel}
            >
              Cancel
            </Button>
            <Button
              className={"btn btn-danger"}
              onClick={handleClosingWarningContinue}
            >
              Continue Exiting
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
