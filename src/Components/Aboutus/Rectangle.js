import "./rectangle.css";

import imgabout from "../images/Lighthouse.png";
import take from "../images/take.png";
import care from "../images/care.png";
import choose from "../images/choose.png";

function Rectangle() {
  return (
    <div className="aboutUs-all">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to Mini-Garden: Your Haven for Enchanting Terrariums.</p>
      </div>
      <div className="about-us-descandimg">
        <div className="about-us">
          <h1>Find The Perfect Addition To Your Room</h1>
          <p>
            At Mini-Garden, we strive to inspire and guide you on your terrarium
            journey. Explore our collection of meticulously crafted terrariums,
            each carefully designed to capture the essence of nature's charm.
            Oor collection varies from open containers that allow for optimal
            airflow, to closed ecosystems that create their own sustainable
            cycles.
          </p>
        </div>
        <div className="about-us-desc-img">
          <img className="about-imgbub" src={imgabout} alt=""></img>
        </div>
      </div>

      <div className="corevalues-about-all">
        <h1 className="values-h1">Our Mission and Values </h1>
        <div className="values-about">
          <div className="values-box">
            <img className="value-images" src={take}></img>
            <h1>Goal</h1>
            <p>
              We strive to inspire a deeper connection with the natural world
              and provide a sanctuary of tranquility and harmony for our
              customers.
            </p>
          </div>
          <div className="values-box middle-about">
            <img className="value-images" src={care}></img>
            <h1>Quality</h1>
            <p>
              We are committed to delivering exceptional quality in every aspect
              of our terrariums, from the selection of plants and materials to
              the craftsmanship of our containers.
            </p>
          </div>
          <div className="values-box lastbox">
            <img className="value-images" src={choose}></img>
            <h1>Sustainability</h1>
            <p>
              At the heart of our values is a deep commitment to sustainability.
              We believe in creating terrariums that are not only aesthetically
              pleasing but also eco-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
