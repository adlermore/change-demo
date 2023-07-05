import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  A trusted and secure cryptocurrency exchange.{" "}
                  <span className="text-success">
                    What is a blockchain?
                  </span>
                </h2>
                <p className="lead">
                Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain. 
                At its most basic, a blockchain is a list of transactions that anyone can view and verify. 
                The Bitcoin blockchain, for example, contains a record of every time someone sent or received bitcoin.
                </p>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Top Coins
                  </h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="#/"                    id="tooltip255035741"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        BITCOIN
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#/"                        id="tooltip265846671"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                       ETHEREUM
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#/"
                        id="tooltip233150499"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                       TETHER
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#/"
                        id="tooltip308866163"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/36f266bc4826775268588346777c84c1ae035e7de268a6e124bcc22659f0aa2bf4f66dcad89b2ac978cfdb4d51c2d9f63cf7157769efb500b20ca16a6d5719c7/asset_icons/7deb6ff58870072405c0418d85501c4521c3296e33ef58452be98e4ca592ed19.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                      BNB
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#/"
                        id="tooltip76119384"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        USDT COIN
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#/"
                        id="tooltip646643508"
                        target="blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip646643508">
                       XRP
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
