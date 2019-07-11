import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import "./Auth.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const { loginUser } = this.props;
    let login = {
      username,
      password
    };
    loginUser(login);
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password, errors } = this.state;
    return (
      <div className="auth-components">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3>Login</h3>
              <Form onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    className={
                      errors.username || errors.user ? "is-invalid" : ""
                    }
                    placeholder="Enter Username"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                  />
                  <Form.Text className="text-danger">
                    {errors && <p>{errors.username}</p>}
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className={
                      errors.password || errors.user ? "is-invalid" : ""
                    }
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  <Form.Text className="text-danger">
                    {errors && <p>{errors.password}</p>}
                  </Form.Text>

                  <Form.Text className="text-danger">
                    {errors && <p>{errors.user}</p>}
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
