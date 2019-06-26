import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passsword2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, email, password, password2 } = this.state;

    let newUser = {
      username,
      email,
      password,
      password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response.data);
        this.setState({ errors: error.response.data });
      });

    console.log(newUser);
  };

  render() {
    const { username, email, password, password2, errors } = this.state;

    return (
      <div className="auth-components">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3>Register</h3>

              <Form onSubmit={this.onSubmit} noValidate>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    className={errors.username ? "is-invalid" : ""}
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className={errors.email ? "is-invalid" : ""}
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                  <Form.Text className="text-danger">
                    {errors && <p>{errors.email}</p>}
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className={errors.password ? "is-invalid" : ""}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                  <Form.Text className="text-danger">
                    {errors && <p>{errors.password}</p>}
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    className={errors.password2 ? "is-invalid" : ""}
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={this.onChange}
                  />
                  <Form.Text className="text-danger">
                    {errors && <p>{errors.password2}</p>}
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
