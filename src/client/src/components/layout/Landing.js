import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../../static/pic1.jpg";
import "./Layout.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={pic1} alt="First slide" />
            <Carousel.Caption>
              <h3>Swagg</h3>
              <p>Swaggerino</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Swagger</h3>
              <p>Swaggerino</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Landing;
