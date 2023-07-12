import React from "react";
import NET from 'vanta/dist/vanta.net.min';
import classnames from "classnames";
import {
  Container, Button, Card, CardBody, FormGroup, 
  Input, InputGroupAddon, InputGroupText, InputGroup, Modal,
  Row, Col,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import Form from 'react-bootstrap/Form';
import { FaBitcoin } from 'react-icons/fa';


class Hero extends React.Component {

  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  state = {};

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

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
      color: 0x9d9d9d,
      backgroundColor: 0x1e1e1e,
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
            <Container className="shape-container d-flex align-items-center py-lg hero-shape-inner">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center image-inner-block" lg="6">
                    <img
                      alt="..."
                      className="img-fluid hero_logo_img"
                      src={require("assets/img/brand/textlogo.png")}
                    />
                    <p className="lead text-white">
                      Buy, sell and exchange with <b>Crypto Exchange Armenia</b>
                    </p>
                    <Button
                      className="btn-1 btn-neutral ml-1 btn btn-default order-btn"
                      onClick={() => this.toggleModal("formModal")}
                    >
                      Make an Order
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      size="sm"
                      isOpen={this.state.formModal}
                      toggle={() => this.toggleModal("formModal")}
                    >
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                          Order Form
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => this.toggleModal("formModal")}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body p-0">
                        <Card className="bg-secondary shadow border-0">
                          <CardBody className="first-modal-inner">
                            <div className="text-center text-muted mb-4">
                              Get date for exchange
                            </div>
                            <Form role="form">
                              <FormGroup
                                className={classnames("mb-3", {
                                  focused: this.state.emailFocused,
                                })}
                              >
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Name !!!"
                                    type="text"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-mobile-button" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Phone Number !!!"
                                    type="text"
                                    autoComplete="off"
                                  />
                                </InputGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Email"
                                    type="email"
                                  />
                                </InputGroup>
                                <FormGroup>
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-calendar-grid-58" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <ReactDatetime
                                      inputProps={{
                                        placeholder: "Date Picker Here"
                                      }}
                                      timeFormat={false}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <Form.Select className="form-control" aria-label="Default select example">
                                  <option className="ni ni-money-coins"> Select Coin</option>
                                  <option value="1"  selected>Bitcoin</option>
                                  <option value="2"> Ethereum</option>
                                  <option value="3"> Tether</option>
                                  <option value="4"> BNB</option>
                                  <option value="4"> USD Coin</option>
                                  <option value="4"> XRP</option>
                                </Form.Select>
                              </FormGroup>
                              <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-money-coins" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Select Coin Count"
                                    type="number"
                                  />
                                </InputGroup>
                              <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                  Send Order
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
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
                y="0">
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
