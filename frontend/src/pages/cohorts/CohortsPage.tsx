import {
  AgGridSortDirection,
  useDashboardCohortsLazyQuery,
} from "../../generated/graphql";
import { Dispatch, SetStateAction, useState } from "react";
import {
  MAX_ROWS_EXPORT,
  MAX_ROWS_EXPORT_WARNING,
  WesSampleDetailsColumns,
  CohortsListColumns,
} from "../../shared/helpers";
import { useParams } from "react-router-dom";
import NewRecordsList from "../../components/NewRecordsList";
import { AlertModal } from "../../components/AlertModal";

interface ICohortsPageProps {
  userEmail: string | null;
  setUserEmail: Dispatch<SetStateAction<string | null>>;
}

export default function CohortsPage({
  userEmail,
  setUserEmail,
}: ICohortsPageProps) {
  const params = useParams();
  const [userSearchVal, setUserSearchVal] = useState<string>("");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [alertModal, setAlertModal] = useState<{
    show: boolean;
    title: string;
    content: string;
  }>({ show: false, title: "", content: "" });

  const dataName = "cohorts";
  const sampleQueryParamFieldName = "cohortId";
  const sampleQueryParamValue = params[sampleQueryParamFieldName];
  const defaultSort = {
    colId: "initialCohortDeliveryDate",
    sort: AgGridSortDirection.Desc,
  };

  return (
    <>
      <NewRecordsList
        columnDefs={CohortsListColumns}
        dataName={dataName}
        defaultSort={defaultSort}
        lazyRecordsQuery={useDashboardCohortsLazyQuery}
        userSearchVal={userSearchVal}
        setUserSearchVal={setUserSearchVal}
        showDownloadModal={showDownloadModal}
        setShowDownloadModal={setShowDownloadModal}
        handleDownload={(recordCount: number) => {
          if (recordCount && recordCount > MAX_ROWS_EXPORT) {
            setAlertModal({
              show: true,
              ...MAX_ROWS_EXPORT_WARNING,
            });
          } else {
            setShowDownloadModal(true);
          }
        }}
        samplesColDefs={WesSampleDetailsColumns}
        sampleContext={
          sampleQueryParamValue
            ? {
                fieldName: sampleQueryParamFieldName,
                values: [sampleQueryParamValue],
              }
            : undefined
        }
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />

      <AlertModal
        show={alertModal.show}
        onHide={() => {
          setAlertModal({ ...alertModal, show: false });
        }}
        title={alertModal.title}
        content={alertModal.content}
      />
    </>
  );
}
