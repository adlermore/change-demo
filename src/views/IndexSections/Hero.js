import React from "react";
import NET from 'vanta/dist/vanta.net.min';
import {  Container, Button,  Modal,  Row, Col,} from "reactstrap";
import HeroModal from "../../components/FormSection/HeroModal";

class Hero extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  state={};

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
                      <div className="modal-header hero-modal-header">
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
                        <HeroModal/>
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
