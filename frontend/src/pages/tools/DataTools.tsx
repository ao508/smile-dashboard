import classNames from "classnames";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  useGetIgoLimsRequestLazyQuery,
  useGetIgoLimsRequestQuery,
} from "../../generated/graphql";
import { parseUserSearchVal } from "../../utils/parseSearchQueries";

export default function DataTools({}) {
  const params = useParams();
  const [userSearchVal, setUserSearchVal] = useState<string>("");

  const [, { error, data, refetch }] = useGetIgoLimsRequestLazyQuery({});

  function refreshData(userSearchVal: string) {
    const searchVals = [...parseUserSearchVal(userSearchVal)];
    const thisFetch = refetch({ requestId: searchVals[0] });
    return thisFetch.then((result) => {
      console.log(result);
      return result.data.igoLimsRequest;
    });
  }

  return (
    <>
      <Container fluid>
        <Row
          className={classNames("d-flex align-items-center tableControlsRow")}
        >
          <Col md="auto" style={{ marginLeft: -15 }}>
            <Form.Control
              className={"d-inline-block"}
              style={{ width: "300px" }}
              type="search"
              placeholder={"Search for IGO request"}
              aria-label="Search"
              value={userSearchVal}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  const userSearchVal = event.currentTarget.value;
                  setUserSearchVal(userSearchVal);
                }
              }}
              onInput={(event) => {
                const userSearchVal = event.currentTarget.value;
                setUserSearchVal(userSearchVal);
              }}
            />
          </Col>
          <Col md="auto" style={{ marginLeft: -15 }}>
            <Button
              onClick={async (r) => refreshData(userSearchVal)}
              className={"btn btn-secondary"}
            >
              Pull Raw IGO Data
            </Button>
          </Col>
        </Row>
        <Row
          className={classNames("d-flex align-items-center tableControlsRow")}
        >
          <textarea
            value={JSON.stringify(data?.igoLimsRequest, null, 2)}
            readOnly
            rows={40}
            style={{
              width: "100%",
              fontFamily: "monospace",
              backgroundColor: "#f5f5f5",
            }}
          />
        </Row>
        <Row
          className={classNames("d-flex align-items-center tableControlsRow")}
        >
          <Col md="auto" style={{ marginLeft: -15 }}>
            <Button className={"btn btn-secondary"}>Publish to SMILE</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
