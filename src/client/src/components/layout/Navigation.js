import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import Rusi1 from "../../static/Rusi1.png";

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
          <Navbar.Brand>
            <Link to="/">
              <img src={Rusi1} className="brand-icon" alt="..." />
            </Link>
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              {""}
              Home
            </Link>
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
