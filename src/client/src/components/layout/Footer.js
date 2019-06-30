import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./Layout.css";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="footer">
        <Container>
          <Row>
            <Col>
              {" "}
              <a
                className="footer-date"
                href="https://www.facebook.com/rusiphilippines/"
              >
                Facebook Page
              </a>
            </Col>

            <Col>
              <p className="footer-date">
                Rusi Motors {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
