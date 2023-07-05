import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  // Card,
  // CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import { FaViber } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col lg="6">
                <Row className="col-text-lg-right btn-wrapper justify-content-end">
                  <Button
                    className="btn-icon-only rounded-circle"
                    color="twitter"
                    href="https://t.me/narekhovhannisyan7"
                    id="tooltip475038074"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      {/* <i className="fa fa-twitter" /> */}
                      <FaTelegram />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip475038074">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="facebook"
                    href="https://www.facebook.com/cryptoexchangearmenia"
                    id="tooltip837440414"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-facebook-square" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip837440414">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="dribbble"
                    href="https://www.instagram.com/cryptoexchangearmenia"
                    id="tooltip829810202"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa  fa-instagram" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip829810202">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="github"
                    href="https://wa.me/37455077111"
                    id="tooltip495507257"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-whatsapp" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip495507257">
                    Call us
                  </UncontrolledTooltip>
                </Row>
                <Row className="footer_contacts_inner">
                  <div className="addres_line">Nalbandyan 7/1, Yerevan, Armenia</div>
                  <div className="mailLine">cryptoexchangearmenia@gmail.com</div>
                  <div className="phoneNumber">+374 55 077111</div>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#/"
                    target="_blank"
                  >
                    Crypto Exchange Armenia
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#/"
                      target="_blank"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#/"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#/"
                      target="_blank"
                    >
                      Map
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
