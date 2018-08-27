import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./CustomNavbar.css";

export default class CustomNavBar extends Component {
  render() {
    return (
      <div className="sticky-nav">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">B R A N D N A M E</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <Menu num={1} href="/">
                H O M E
              </Menu>
              <Menu num={2} href="/about">
                A B O U T
              </Menu>
              <Menu num={3} href="/news">
                N E W S
              </Menu>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
