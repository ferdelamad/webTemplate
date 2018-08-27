import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Phone.css";

const Phone = () => (
  <div className="phone">
    <div className="dfl">
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
    <div className="center">
      <div className="device-wrapper center">
        <div
          className="device"
          data-device="iPhone7"
          data-orientation="portrait"
          data-color="black"
        >
          <div className="screen">
            <div>Text Here</div>
          </div>
          <div className="button" />
        </div>
      </div>
    </div>
  </div>
);

export default Phone;
