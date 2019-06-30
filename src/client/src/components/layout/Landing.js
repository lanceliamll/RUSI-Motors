import React, { Component, Fragment } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import "./Layout.css";

class Landing extends Component {
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
                  className="px-5 btn btn-outline-light btn-md header-buttons"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="ml-3 px-5 btn btn-outline-light btn-md header-buttons"
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil consequatur, doloribus libero iste optio magnam
                    provident, illum vero, odio culpa assumenda amet sint
                    voluptatem? Dignissimos perspiciat
                  </p>
                </Col>
                <Col md={{ span: 4 }}>
                  <p className="content-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil consequatur, doloribus libero iste optio magnam
                    provident, illum vero, odio culpa assumenda amet sint
                    voluptatem? Dignissimos perspiciat
                  </p>
                </Col>
                <Col md={{ span: 4 }}>
                  <p className="content-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil consequatur, doloribus libero iste optio magnam
                    provident, illum vero, odio culpa assumenda amet sint
                    voluptatem? Dignissimos perspiciat
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
