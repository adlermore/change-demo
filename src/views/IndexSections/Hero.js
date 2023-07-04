import React from "react";
// import * as THREE from "three";
import NET from 'vanta/dist/vanta.net.min';

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {

  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 700.00,
      minWidth: 1300.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x968496,
      backgroundColor: 0x1e1e43,
      points: 17.00,
      maxDistance: 14.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (
      <>
        <div className="position-relative animatied-relative ">
          <div ref={this.vantaRef} className="animation_block" ></div>
          <section className="section section-hero section-shaped">
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid hero_logo_img"
                      src={require("assets/img/brand/textlogo.png")}
                    />
                    <p className="lead text-white">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <Button className="btn-1 btn-neutral ml-1 btn btn-default">
                      order Now
                    </Button>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
