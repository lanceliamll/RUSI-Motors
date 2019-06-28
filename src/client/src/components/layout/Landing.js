import React, { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import pic4 from "../../static/pic4.jpg";
import "./Layout.css";

class Landing extends Component {
  render() {
    return (
      <Fragment>
        {/* Carousel */}
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={pic4} alt="First slide" />

              <Carousel.Caption>
                <div className="header-caption">
                  <h1 className="header-caption-text">RUSI Motors Inc.</h1>
                  <h3>A Real Man Machine</h3>
                  <p>Rusi Motors</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={pic4} alt="Third slide" />

              <Carousel.Caption>
                <div className="header-caption">
                  <h1 className="header-caption-text">Inquire here now!</h1>
                  <h3>Most Powerful</h3>
                  <p>Rusi Motors</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Some Content */}
      </Fragment>
    );
  }
}

export default Landing;
