import React, {useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {Card,CardBody, Input, InputGroupAddon, 
InputGroupText, Container, } from "reactstrap";
import classnames from "classnames";
import { UncontrolledAlert } from "reactstrap";


const FormSection = () => {

  const formCurr = useRef();
  const [validated, setValidated] = useState(false);
  const [alertshow, setalertshow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log(form.checkValidity());
    }else if(form.checkValidity() === true){
      event.preventDefault()
      sendEmail(event);
      setalertshow(true)
    }
    setValidated(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pak5ekv', 'template_6yx6l8m', formCurr.current, '7z903eOIvu2d2tmxL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className="section section-lg section-contact-us" id="contacts-section">
        <Container>
        {alertshow &&
        <UncontrolledAlert color="success" fade={true}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Success!</strong> Thanks for filling out our form!
          </span>
        </UncontrolledAlert> 
        }
          <Row className="justify-content-between">
            <Col lg="6">
              <div className="contact-image shadow ">
                <img src='https://crypto-react-steel.vercel.app/static/media/contact.e18df1c8e8d9ff3fd7b5.jpg' alt="" />
              </div>
            </Col>
            <Col lg="6">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Want to work with us?</h4>
                  <p className="mt-0">
                    Your project is very important to us.
                  </p>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formCurr}>
                  <Form.Group className={classnames("mt-5")}  controlId="validationCustom01">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Your name"   required name="user_name"  autoComplete="off"  type="text" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group  controlId="validationCustom02" >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email address" required name="user_email"   autoComplete="off"  type="email" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-4"  controlId="validationCustom03">
                    <Input  className="form-control-alternative" cols="80" required  name="message" 
                      placeholder="Type a message..." rows="4" type="textarea" />
                  </Form.Group>
                  <div className="btn-hr">
                    <Button    className="btn-round contact-btn" color="default" size="lg" type="submit" disabled={alertshow} >
                      Send Message
                    </Button>
                  </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FormSection;