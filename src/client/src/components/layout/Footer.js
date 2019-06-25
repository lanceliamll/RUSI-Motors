import React from "react";
import { Navbar } from "react-bootstrap";
import "./Layout.css";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <p className="footer-date">Rusi Motors {new Date().getFullYear()}</p>
    </Navbar>
  );
};

export default Footer;
