import { PageHeader } from "../../shared/components/PageHeader";
import SamplesList from "../../components/SamplesList";
import {
  SampleDetailsColumns,
  prepareSampleMetadataForAgGrid,
  sampleFilterWhereVariables,
} from "../../shared/helpers";
import { SampleWhere } from "../../generated/graphql";

export default function SamplesPage() {
  return (
    <>
      <PageHeader dataName={"samples"} />

      <SamplesList
        columnDefs={SampleDetailsColumns}
        prepareDataForAgGrid={prepareSampleMetadataForAgGrid}
        refetchWhereVariables={(parsedSearchVals) => {
          return {
            hasMetadataSampleMetadata_SOME: {
              OR: sampleFilterWhereVariables(parsedSearchVals),
            },
          } as SampleWhere;
        }}
      />
    </>
  );
}
