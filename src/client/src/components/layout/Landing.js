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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, deleniti! Veniam molestiae ratione eius accusantium
                    reiciendis ad cumque nesciunt aliquam harum, dolores
                    doloremque illo, dolorem tempore magnam beatae! Atque, quis!
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
