import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import Phone from "./Phone";
import Typing from "react-typing-animation";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid>
          <div className="main">
            <Jumbotron>
              <h2>
                Welcome to <code>Custom WebSite</code> Template
              </h2>
              <Typing>
                <p>
                  This is how to build a website with React,
                  <Typing.Backspace count={6} />
                  React-Router and
                  <Typing.Backspace count={16} />
                  React-BootStrap.
                  <Typing.Backspace count={16} />
                </p>
              </Typing>
              <Phone />
              <Link to="/about">
                <Button bsStyle="primary">Learn More!</Button>
              </Link>
            </Jumbotron>
          </div>
          <Row className="show-grid text-center disp">
            <Col xs={12} sm={14} className="person-wrapper">
              <Image
                src="assets/cover_robot Cropped.jpg"
                circle
                className="profile-pic"
              />
              <h3>Robot</h3>
              <p>Random Robot Text</p>
            </Col>
            <Col xs={12} sm={14} className="person-wrapper">
              <Image
                src="assets/cover_robot Cropped.jpg"
                circle
                className="profile-pic"
              />
              <h3>Robot</h3>
              <p>Random Robot Text</p>
            </Col>
            <Col xs={12} sm={14} className="person-wrapper">
              <Image
                src="assets/cover_robot Cropped.jpg"
                circle
                className="profile-pic"
              />
              <h3>Robot</h3>
              <p>Random Robot Text</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
