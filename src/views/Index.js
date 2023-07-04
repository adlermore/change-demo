import React from "react";

// reactstrap components
import {
  // Badge,
  Button,
  Card,
  CardBody,
  // CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import MapSection from "components/MapSection/MapSection.js";
import FormSection from "components/FormSection/FormSection.js";
// index page sections
import Hero from "./IndexSections/Hero.js";
// import Buttons from "./IndexSections/Buttons.js";
// import Inputs from "./IndexSections/Inputs.js";
import CoinSection from "./IndexSections/CoinSection.js";
// import CustomControls from "./IndexSections/CustomControls.js";
// import Menus from "./IndexSections/Menus.js";
// import Navbars from "./IndexSections/Navbars.js";
// import Tabs from "./IndexSections/Tabs.js";
// import Progress from "./IndexSections/Progress.js";
// import Pagination from "./IndexSections/Pagination.js";
// import Pills from "./IndexSections/Pills.js";
// import Labels from "./IndexSections/Labels.js";
// import Alerts from "./IndexSections/Alerts.js";
// import Typography from "./IndexSections/Typography.js";
// import Modals from "./IndexSections/Modals.js";
// import Datepicker from "./IndexSections/Datepicker.js";
// import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Carousel from "./IndexSections/Carousel.js";
// import Icons from "./IndexSections/Icons.js";
// import Login from "./IndexSections/Login.js";
import Download from "./IndexSections/Download.js";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";


class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  state = {};
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          {/* <Buttons /> */}
    
          {/* <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login /> */}
          <Download />
          <Carousel />

          <CoinSection />
          <section className="section section-lg section-contact-us">
            <Container>
              <Row className="justify-content-center">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <FormSection />
          <MapSection />
          {/* <Inputs /> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
