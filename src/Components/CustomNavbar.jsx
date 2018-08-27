import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./CustomNavbar.css";

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">NLP App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullCenter>
            <Menu num={1} href="/">
              HOME
            </Menu>
            <Menu num={2} href="/about">
              ABOUT
            </Menu>
            <Menu num={3} href="/news">
              NEWS
            </Menu>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
