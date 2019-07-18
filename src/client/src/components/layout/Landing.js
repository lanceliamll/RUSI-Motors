import React, { Component, Fragment } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./Layout.css";

class Landing extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Fragment>
          <Jumbotron className="landingpage-header">
            <div className="container">
              <div className="position">
                <h1>
                  <span className="r">R</span>USI Motorcycles
                </h1>
                <p>One of the most loved motorcycle brand.</p>
              </div>
              <div>
                <a
                  href="/login"
                  className="px-4 btn btn-outline-light btn-sm header-buttons"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="ml-3 px-4 btn btn-outline-light btn-sm header-buttons"
                >
                  Register
                </a>
              </div>
            </div>
          </Jumbotron>

          {/* Some Content */}
          <div className="landingpage-content">
            <Container fluid>
              <Row>
                <Col md={{ span: 4 }}>
                  <p className="content-text">
                    Philippine most love motorcycle brand. Products were build
                    with dedication and hardwork.
                  </p>
                </Col>
                <Col md={{ span: 4 }}>
                  <p className="content-text">
                    The Rusi Motorcycles first goal is to bring the best
                    satisfaction that the customer have. Offering powerful
                    motorcycles that can compete with the best .
                  </p>
                </Col>
                <Col md={{ span: 4 }}>
                  <p className="content-text">
                    Inquire online to value your time and to get the great
                    experience.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Landing;
