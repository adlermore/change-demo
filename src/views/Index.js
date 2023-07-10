import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import MapSection from "components/MapSection/MapSection.js";
import FormSection from "components/FormSection/FormSection.js";
import Hero from "./IndexSections/Hero.js";
import CoinSection from "./IndexSections/CoinSection.js";
import Carousel from "./IndexSections/Carousel.js";
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
          <Download />
          <Carousel />
          <CoinSection />
          <MapSection />

          <FormSection />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
