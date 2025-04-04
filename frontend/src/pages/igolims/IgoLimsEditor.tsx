import { _ } from "ag-grid-community";
import {
  useGetIgoLimsRequestJsonLazyQuery,
  useGetIgoLimsRequestJsonQuery,
} from "../../generated/graphql";

export default function IgoLimsEditorPage() {
  const [, { data, refetch }] = useGetIgoLimsRequestJsonLazyQuery({
    variables: {
      requestId: "08944_B",
    },
  });

  var r = refetch({
    requestId: "08944_B",
  }).then((result) => {
    console.log(result);
    return result;
  });
  console.log(r);

  return <div>{/* {data?.igoLimsRequestJson} */}</div>;
}
