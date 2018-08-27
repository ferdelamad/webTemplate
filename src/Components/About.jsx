import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/header Cropped.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/pro-pic.jpg"
              className="about-profile-pic"
              rounded
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
