import Headervideo from "../Components/headervideo/video";
import Abouthome from "../Components/Home/Abouthome";
import Categoryhome from "../Components/Home/Categoryhome";
import HowItWorks from "../Components/Home/HowItWorks";
import SliderProducts from "../Components/Home/SliderProducts";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import Loader from "../Components/loader/Loader";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Headervideo />
      <div className="product-slider-page">
        <SliderProducts />
      </div>
      <Abouthome />

      <div>
        <div className="home-stickyImage"></div>
      </div>
      <Categoryhome />

      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
