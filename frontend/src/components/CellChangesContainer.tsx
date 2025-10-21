import { Button, Modal } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { RecordChange } from "../types/shared";
import { Dispatch, SetStateAction } from "react";

const updateModalColumnDefs = [
  { field: "recordId", rowGroup: true, hide: true },
  { field: "fieldName" },
  { field: "oldValue" },
  { field: "newValue" },
];

const autoGroupColumnDef = {
  headerName: "Primary Id",
  field: "recordId",
};

interface CellChangesContainerProps {
  isSampleLevelChanges: boolean;
  changes: Array<RecordChange>;
  cellChangesHandlers: {
    handleDiscardChanges: () => void;
    handleConfirmUpdates: () => void;
    handleSubmitUpdates: () => void;
    showUpdateModal: boolean;
    setShowUpdateModal: Dispatch<SetStateAction<boolean>>;
  };
}

export function CellChangesContainer({
  changes,
  cellChangesHandlers: {
    handleDiscardChanges,
    handleConfirmUpdates,
    handleSubmitUpdates,
    showUpdateModal,
    setShowUpdateModal,
  },
  isSampleLevelChanges,
}: CellChangesContainerProps) {
  if (isSampleLevelChanges) {
    autoGroupColumnDef.headerName = "Primary ID";
  } else {
    autoGroupColumnDef.headerName = "Cohort ID";
  }

  function handleUpdateModalHide() {
    setShowUpdateModal(false);
  }
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <Button
          className="btn btn-secondary"
          onClick={handleDiscardChanges}
          size="sm"
        >
          Discard Changes
        </Button>{" "}
        <Button
          className="btn btn-success"
          onClick={handleConfirmUpdates}
          size="sm"
        >
          Confirm Updates
        </Button>
      </div>

      {showUpdateModal && (
        <Modal
          show={true}
          size="lg"
          centered
          onHide={handleUpdateModalHide}
          className="overlay"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Confirm your changes
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="ag-theme-alpine" style={{ height: 350 }}>
              <AgGridReact
                rowData={changes}
                columnDefs={updateModalColumnDefs}
                groupRemoveSingleChildren={true}
                autoGroupColumnDef={autoGroupColumnDef}
                groupDefaultExpanded={1}
              />
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="btn btn-secondary"
              onClick={handleUpdateModalHide}
            >
              Cancel
            </Button>
            <Button className="btn btn-success" onClick={handleSubmitUpdates}>
              Submit Updates
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
