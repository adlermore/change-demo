
import React from "react";

// reactstrap components
import {Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/crypto-slider1.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/crypto-slider2.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped carusel-section">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Buy / Sell Cryptocurrency 
                </h1>
                <p className="lead text-white mt-4">
                Buy , sell and exchange cryptocurrencies with low percentage. 
                The office is located at <b>Nalbandyan 7/1 </b>, next to Yerevan Square. 
                The percentage will change if you become a permanent customer. 
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded slider-home shadow-lg overflow-hidden">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Carousel;
