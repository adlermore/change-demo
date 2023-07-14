
import React from "react";
import {
  Container, Card, CardBody,
  UncontrolledCarousel,
  Row, Col,
} from "reactstrap";
import { GrSecure } from 'react-icons/gr';
import { MdSecurity } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';

const items = [
  // {
  //   src: require("assets/img/theme/crypto-slider1.jpg"),
  //   altText: "",
  //   caption: "",
  //   header: "",
  // },
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
        <section className="section section-shaped carusel-section" id="about-section">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span className="decorImg"></span>
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
          <section className="section about-container pt-lg-0">
            <Container>
              <Row className="justify-content-center abount-inner-container">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape icon-about icon-about-first rounded-circle mb-4">
                            <GrSecure size={80} />
                          </div>
                          <h6 className=" about-title text-uppercase">
                            Fast and secure transactions
                          </h6>
                          <p className="description  abount-description mt-3">
                            We provide a safe protocol for your crypto exchange and
                            complete your transactions in just a few minutes.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape icon-about  icon-about-second rounded-circle mb-4">
                            <MdSecurity size={80} />
                          </div>
                          <h6 className=" about-title text-uppercase">
                            Confidentiality and Security
                          </h6>
                          <p className="description  abount-description mt-3">
                            Make transactions with the maximum security guaranteed
                            on our cryptocurrency exchange platform.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody>
                          <div className="icon icon-shape icon-about icon-about-last rounded-circle mb-4">
                            <GrMapLocation size={80} />
                          </div>
                          <h6 className=" about-title text-uppercase">
                            Office in the centre of Yerevan
                          </h6>
                          <p className="description  abount-description mt-3">
                            For you comfort our office is located at Nalbandyan 7/1,
                            near Republic square
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </>
    );
  }
}

export default Carousel;
