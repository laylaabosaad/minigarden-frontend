import React from 'react'
import Headervideo from '../Components/headervideo/video'
import Abouthome from '../Components/Home/Abouthome'
import Categoryhome from '../Components/Home/Categoryhome'
import HowItWorks from '../Components/Home/HowItWorks'
import SliderProducts from "../Components/Home/SliderProducts";



function Home() {
  return (
    <div>
      <Headervideo />
      <Abouthome />
      <div className="product-slider-page">
        <SliderProducts />
      </div>
      {/* <div className="howitworksall">
        <div className="home-stickyImage"></div>
      </div> */}
      <Categoryhome />

      <HowItWorks />
    </div>
  );
}

export default Home