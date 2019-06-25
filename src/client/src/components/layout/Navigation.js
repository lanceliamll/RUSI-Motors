import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Rusi Motors</Navbar.Brand>

          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              {""}
              Home
            </Link>

            <Link className="nav-link" to="/login">
              {" "}
              Login
            </Link>

            <Link className="nav-link" to="/register">
              {" "}
              Register
            </Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
