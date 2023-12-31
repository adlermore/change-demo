import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import { Card, CardBody, FormGroup, Input, InputGroupAddon, InputGroupText } from "reactstrap";
import ReactDatetime from "react-datetime";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineFileDone } from 'react-icons/ai';


const HeroModal = () => {

  const formCurr = useRef();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // console.log(form.checkValidity());
    } else if (form.checkValidity() === true) {
      event.preventDefault()
      sendEmail(event);
      document.getElementById('sucsess-mode').classList.add('active');
    }
    setValidated(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2cr5xi5', 'template_ubrbzx9', formCurr.current, '7z903eOIvu2d2tmxL')
      .then((result) => {
        // console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Card className="shadow hero-modal border-0 " id="sucsess-mode">
        <CardBody className="first-modal-inner">
          <div className="text-center text-muted mb-3">
            Get date for exchange
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formCurr}>
            <FormGroup>
              <Form.Group controlId="validationCustom01">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Your name" required name="user_name" autoComplete="off" type="text" />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="validationCustom01">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-mobile-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Phone Number" required name="phone_number" autoComplete="off" type="text" />
                </InputGroup>
              </Form.Group>
              <InputGroup className="input-group-alternative notValidationInput">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  autoComplete="off"
                />
              </InputGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative notValidationInput">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime
                    minDate={new Date()}
                    inputProps={{
                      placeholder: "Get Vizit Date",
                      name: "vizit_date",
                      autoComplete: "off"
                    }}
                    timeFormat={false}
                  />
                </InputGroup>
              </FormGroup>
              <div className="radio-modal ">
                <Form.Check
                  inline
                  defaultChecked  
                  name="group1"
                  type='radio'
                  label='Buy Coin'
                  value='Buy Coin'
                  id='radio-buy'
                  className="input-group"
                />
                <Form.Check
                  inline
                  name="group1"
                  type='radio'
                  label='Sell Coin'
                  value='Sell Coin'
                  id='radio-sell'
                  className="input-group" 
                />
              </div>
              <Form.Select className="input-group-alternative input-group form-control   notValidationInput" name="coin_name" aria-label="Coin Select" defaultValue="Bitcoin">
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum"> Ethereum</option>
                <option value="Tether USDT"> Tether USDT</option>
                <option value="USDC"> USDC</option>
                <option value="BUSD"> BUSD</option>
                <option value="BNB"> BNB</option>
                <option value="XRP"> XRP</option>
              </Form.Select>
            </FormGroup>
            <InputGroup className="input-group-alternative notValidationInput">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-money-coins" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Select Coin Count"
                type="number"
                name="coin_count"
                autoComplete="off"
              />
            </InputGroup>
            <div className="text-center btn-center">
              <Button className="btn-round" color="default" size="lg" type="submit" >
                Send Message
              </Button>
            </div>
          </Form>
        </CardBody>
        <div className="sucsess_mode" >
          <div className="svg_block">
            <AiOutlineFileDone />
          </div>
          <div className="succsess_text">
            <div className="sucsess_title">Great !</div>
            <div className="sucsess_desc">Your Form successfuly send.</div>
          </div>
        </div>
      </Card>

    </>
  );
};

export default HeroModal;