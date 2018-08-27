import React from "react";
import { Row, Col } from "react-bootstrap";

const DF = () => (
  <div>
    <Row>
      <Col xs={12} sm={14}>
        <iframe
          allow="microphone;"
          width="185"
          height="325"
          src="https://console.dialogflow.com/api-client/demo/embedded/e3adc518-775d-4552-a3e2-b8f0b7278cc4"
        />
      </Col>
    </Row>
  </div>
);

export default DF;
