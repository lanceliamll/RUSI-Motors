import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Navigation extends Component {
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
    return <Redirect to="/" />;
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const adminLinks = (
      <Fragment>
        <Link className="nav-link" to="/maintenance">
          {""}
          Settings
        </Link>
      </Fragment>
    );

    const authLinks = (
      <Fragment>
        {user !== null && isAuthenticated ? adminLinks : null}

        <Link className="nav-link" to="/Products">
          {""}
          Products
        </Link>

        <a href="#test" className="nav-link" onClick={this.logout}>
          {""}
          Logout
        </a>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link className="nav-link" to="/login">
          {""}
          Login
        </Link>

        <Link className="nav-link" to="/register">
          {""}
          Register
        </Link>
      </Fragment>
    );

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Rusi Motors</Navbar.Brand>

          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              {""}
              Home
            </Link>
            {/* {isAuthenticated ? adminLinks : guestLinks} */}
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar>
      </>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);
