import { RefObject, ClipboardEvent, useState, useEffect } from "react";
import { useUserEmail } from "../contexts/UserEmailContext";
import { useWarningModal } from "../contexts/WarningContext";
import {
  CellEditRequestEvent,
  IServerSideGetRowsParams,
} from "ag-grid-community";
import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact";
import {
  DashboardCohort,
  DashboardCohortInput,
  DashboardSample,
  DashboardSampleInput,
  useUpdateDashboardSamplesMutation,
  useUpdateTempoCohortMutation,
} from "../generated/graphql";
import { handleAgGridPaste } from "../utils/handleAgGridPaste";
import { awaitLoginPopup } from "../utils/awaitLoginPopup";
import { RecordChange } from "../types/shared";
import { formatCellDate, isInvalidCostCenter } from "../utils/agGrid";
import {
  INVALID_COST_CENTER_WARNING,
  POLLING_PAUSE_AFTER_UPDATE,
} from "../configs/shared";
import { formatCohortUsersString } from "../utils/formatCohortUsersString";
import _ from "lodash";
import { BILLING_FIELDS } from "../pages/samples/config";

interface UseCellChangesParams {
  gridRef: RefObject<AgGridReactType<any>>;
  startPolling: () => void;
  stopPolling: () => void;
  records: Array<DashboardSample> | Array<DashboardCohort> | undefined;
  refreshData: () => void;
  isSampleLevelChanges: boolean;
  pinnedRecordIds?: string[];
}

export function useCellChanges({
  gridRef,
  startPolling,
  stopPolling,
  records,
  refreshData,
  isSampleLevelChanges,
  pinnedRecordIds = [],
}: UseCellChangesParams) {
  const [changes, setChanges] = useState<Array<RecordChange>>([]);
  const { userEmail, setUserEmail } = useUserEmail();
  const { setWarningModalContent } = useWarningModal();
  const [updateDashboardSamplesMutation] = useUpdateDashboardSamplesMutation();
  const [updateTempoCohortMutation] = useUpdateTempoCohortMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Discard unsaved changes when the user logs out.
  // Intentionally excludes `changes` and `handleDiscardChanges` from deps —
  // this should only fire on logout, not on every change.
  useEffect(() => {
    if (!userEmail && changes.length > 0) {
      handleDiscardChanges();
    } // eslint-disable-next-line
  }, [userEmail]);

  async function handleCellEditRequest(params: CellEditRequestEvent) {
    const recordId = isSampleLevelChanges
      ? params.data.primaryId
      : params.data.cohortId;
    const fieldName = params.colDef.field!;
    const { oldValue, newValue, node: rowNode } = params;

    // Prevent registering a change if no actual changes are made.
    // Use explicit null/empty check instead of falsy to avoid treating boolean
    // `false` as "empty" (which would cause selecting "No" to be discarded).
    const isNullOrEmpty = (val: any) => val == null || val === "";
    const noChangeInVal = rowNode.data[fieldName] === newValue;
    const noChangeInEmptyCell =
      isNullOrEmpty(rowNode.data[fieldName]) && isNullOrEmpty(newValue);
    if (noChangeInVal || noChangeInEmptyCell) {
      setChanges((changes) => {
        const updatedChanges = changes.filter(
          (c) => !(c.recordId === recordId && c.fieldName === fieldName)
        );
        return updatedChanges;
      });
      gridRef.current?.api?.redrawRows({ rowNodes: [rowNode] });
      startPolling();
      return;
    }

    stopPolling();

    // Add/update the billedBy cell to/in the changes array
    if (BILLING_FIELDS.has(fieldName) && setUserEmail) {
      let currUserEmail = userEmail;

      if (!currUserEmail) {
        currUserEmail = await awaitLoginPopup();
        if (!currUserEmail) return;
        setUserEmail(currUserEmail);
      }

      const currUsername = currUserEmail.split("@")[0];

      setChanges((changes) => {
        const billedBy = changes.find(
          (c) => c.recordId === recordId && c.fieldName === "billedBy"
        );
        if (billedBy) {
          billedBy.newValue = currUsername;
        } else {
          changes.push({
            recordId,
            fieldName: "billedBy",
            oldValue: "",
            newValue: currUsername,
            rowNode,
          });
        }
        return [...changes];
      });
    }

    // Add/update the edited cell to/in the changes array
    setChanges((changes) => {
      const change = changes.find(
        (c) => c.recordId === recordId && c.fieldName === fieldName
      );
      if (change) {
        change.newValue = newValue;
      } else {
        changes.push({
          recordId,
          fieldName,
          oldValue,
          newValue,
          rowNode,
        });
      }
      return [...changes];
    });

    // Validate Cost Center inputs
    if (isInvalidCostCenter(fieldName, newValue)) {
      setWarningModalContent(INVALID_COST_CENTER_WARNING);
    }

    gridRef.current?.api?.redrawRows({ rowNodes: [rowNode] });
  }

  async function handlePaste(e: ClipboardEvent<HTMLDivElement>) {
    if (!handleCellEditRequest) return;
    try {
      await handleAgGridPaste({
        e,
        gridRef,
        handleCellEditRequest,
        context: { userEmail },
      });
    } catch (error) {
      if (error instanceof Error) {
        setWarningModalContent(error.message);
      } else {
        console.error("Unexpected error during paste:", error);
      }
    }
  }

  function handleDiscardChanges() {
    // Remove cell styles associated with having been edited
    gridRef.current?.api?.redrawRows({
      rowNodes: changes.map((c) => c.rowNode),
    });
    setChanges([]);
    startPolling();
  }

  function handleConfirmUpdates() {
    const hasInvalidCostCenter = changes.some((c) =>
      isInvalidCostCenter(c.fieldName, c.newValue)
    );
    if (hasInvalidCostCenter) {
      setWarningModalContent(INVALID_COST_CENTER_WARNING);
    } else {
      setShowUpdateModal(true);
    }
  }

  async function handleSubmitUpdates(reasonForChange: string) {
    if (changes.length === 0) {
      console.error("No changes available to submit.");
      return;
    }

    const recordIds = _.uniq(changes.map((c) => c.recordId));

    const changesWithReason = [...changes];

    const username = userEmail?.split("@")[0];
    if (!username) {
      console.error("User email is unexpectedly empty.");
    }

    if (isSampleLevelChanges) {
      const formattedChangelog = username
        ? `${username}: ${reasonForChange}`
        : reasonForChange;
      recordIds.forEach((r) => {
        const change = changes.find((c) => c.recordId === r);
        if (!change) {
          return;
        }

        changesWithReason.push({
          recordId: r,
          fieldName: "changelog",
          oldValue: change.rowNode.data.changelog,
          newValue: formattedChangelog,
          rowNode: change.rowNode,
        });
      });
    }

    const changesByRecordId = groupChangesByRecordId(changesWithReason);
    if (isSampleLevelChanges) {
      const newDashboardSamples = buildNewDashboardSamples(changesByRecordId);

      // Send to GraphQL server to publish
      updateDashboardSamplesMutation({
        variables: { newDashboardSamples },
      });

      // Manually handle optimistic updates by refreshing updated rows' UI to indicate them being updated
      // (We can't use GraphQL's optimistic response because it isn't a good fit for
      // AG Grid's Server-Side data model. e.g. GraphQL's optimistic response only returns
      // the updated data, while AG Grid expects the datasource == the entire dataset.)
      const optimisticSamples = records!.map((s) => {
        s = s as DashboardSample; // we already know we're dealing with DashboardSample here
        const changesForSample =
          s.primaryId != null ? changesByRecordId.get(s.primaryId) : undefined;
        if (changesForSample) {
          const changedFields = changesForSample.reduce((acc, change) => {
            acc[change.fieldName] = change.newValue;
            return acc;
          }, {} as Record<string, any>);
          return {
            ...s,
            ...changedFields,
            revisable: false,
            importDate: formatCellDate(new Date()) as string,
          };
        }
        return s;
      });
      optimisticSamples.sort((a, b) => {
        return (
          new Date(b.importDate ?? "").getTime() -
          new Date(a.importDate ?? "").getTime()
        );
      });
      const optimisticDatasource = {
        getRows: (params: IServerSideGetRowsParams) => {
          params.success({
            rowData: optimisticSamples!,
            rowCount: optimisticSamples[0]?._total || 0,
          });
        },
      };
      gridRef.current?.api?.setServerSideDatasource(optimisticDatasource);
    } else {
      const newDashboardCohorts = buildNewDashboardCohorts(changesByRecordId);
      for (const dashboardCohort of newDashboardCohorts) {
        updateTempoCohortMutation({ variables: { dashboardCohort } });
      }

      // Manually handle optimistic updates for cohorts (same pattern as samples)
      const optimisticCohorts = records!.map((c) => {
        c = c as DashboardCohort;
        const changesForCohort =
          c.cohortId != null ? changesByRecordId.get(c.cohortId) : undefined;
        if (changesForCohort) {
          const changedFields = changesForCohort.reduce((acc, change) => {
            acc[change.fieldName] = change.newValue;
            return acc;
          }, {} as Record<string, any>);
          return {
            ...c,
            ...changedFields,
            revisable: false, // revisable is not part of the data structure but plays a role in the rendering the "pending updates" animation
            importDate: formatCellDate(new Date()) as string,
          };
        }
        return c;
      });
      optimisticCohorts.sort((a, b) => {
        const aPinned = pinnedRecordIds.includes(
          (a as DashboardCohort).cohortId ?? ""
        )
          ? 0
          : 1;
        const bPinned = pinnedRecordIds.includes(
          (b as DashboardCohort).cohortId ?? ""
        )
          ? 0
          : 1;
        if (aPinned !== bPinned) return aPinned - bPinned;
        return (
          new Date(b.importDate ?? "").getTime() -
          new Date(a.importDate ?? "").getTime()
        );
      });
      const optimisticDatasource = {
        getRows: (params: IServerSideGetRowsParams) => {
          params.success({
            rowData: optimisticCohorts!,
            rowCount: optimisticCohorts[0]?._total || 0,
          });
        },
      };
      gridRef.current?.api?.setServerSideDatasource(optimisticDatasource);
    }

    // "Reset" the grid with the latest data
    setTimeout(async () => {
      refreshData();
      // No need to resume polling here as `refreshData` already does it
    }, POLLING_PAUSE_AFTER_UPDATE);
    handleDiscardChanges();
    setShowUpdateModal(false);
  }

  function handleForceLabelSubmit(
    allSamples: DashboardSample[],
    username: string
  ) {
    stopPolling();
    const changelog = `${username}: Forcing label generation`;

    const newDashboardSamples: DashboardSampleInput[] = allSamples.map(
      (sample) => {
        const { __typename, igoQcReports, ...sampleData } = sample as any;
        return {
          ...sampleData,
          changedFieldNames: ["forceCmoLabel", "changelog"],
          changelog,
          revisable: false,
        };
      }
    );

    updateDashboardSamplesMutation({ variables: { newDashboardSamples } });

    const optimisticSamples = allSamples.map((s) => ({
      ...s,
      changelog,
      revisable: false,
      importDate: formatCellDate(new Date()) as string,
    }));
    optimisticSamples.sort(
      (a, b) =>
        new Date(b.importDate ?? "").getTime() -
        new Date(a.importDate ?? "").getTime()
    );
    gridRef.current?.api?.setServerSideDatasource({
      getRows: (params: IServerSideGetRowsParams) => {
        params.success({
          rowData: optimisticSamples,
          rowCount: optimisticSamples[0]?._total || 0,
        });
      },
    });

    setTimeout(async () => {
      refreshData();
      // No need to resume polling here as `refreshData` already does it
    }, POLLING_PAUSE_AFTER_UPDATE);
    startPolling();
  }

  return {
    changes,
    setChanges,
    handleCellEditRequest,
    handlePaste,
    handleForceLabelSubmit,
    cellChangesHandlers: {
      handleDiscardChanges,
      handleConfirmUpdates,
      handleSubmitUpdates,
      showUpdateModal,
      setShowUpdateModal,
    },
  };
}

function groupChangesByRecordId(changes: RecordChange[]) {
  const changesByRecordId = new Map<string, Array<RecordChange>>();
  for (const change of changes) {
    if (!changesByRecordId.has(change.recordId)) {
      changesByRecordId.set(change.recordId, []);
    }
    changesByRecordId.get(change.recordId)!.push(change);
  }
  return changesByRecordId;
}

function buildNewDashboardSamples(
  changesByPrimaryId: Map<string, Array<RecordChange>>
) {
  const newDashboardSamplesByPrimaryId = new Map<
    string,
    DashboardSampleInput
  >();
  changesByPrimaryId.forEach((changes, primaryId) => {
    const sampleData = { ...changes[0].rowNode.data };
    for (const change of changes) {
      (sampleData as any)[change.fieldName] = change.newValue;
    }
    delete sampleData.__typename;
    delete sampleData.igoQcReports;
    newDashboardSamplesByPrimaryId.set(primaryId, {
      ...sampleData,
      revisable: false,
      changedFieldNames: changes.map((c) => c.fieldName),
    });
  });
  return Array.from(newDashboardSamplesByPrimaryId.values());
}

function buildNewDashboardCohorts(
  changesByCohortId: Map<string, Array<RecordChange>>
) {
  const newDashboardCohortsByCohortId = new Map<string, DashboardCohortInput>();
  changesByCohortId.forEach((changes, cohortId) => {
    const cohortData = { ...changes[0].rowNode.data };
    for (const change of changes) {
      if (["pmUsers", "endUsers"].includes(change.fieldName)) {
        change.newValue = formatCohortUsersString(change.newValue);
      }
      (cohortData as any)[change.fieldName] = change.newValue;
    }
    delete cohortData.__typename;
    newDashboardCohortsByCohortId.set(cohortId, {
      ...cohortData,
      changedFieldNames: changes.map((c) => c.fieldName),
    });
  });
  return Array.from(newDashboardCohortsByCohortId.values());
}
