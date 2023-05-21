import "./rectangle.css";
import aboutimg from "../images/aboutimg.png";
import imgabout from "../images/Lighthouse.png";
import icon from "../images/icon.png";

function Rectangle() {
  return (
    // <div className="container">
    //   <div className="rectangle"></div>
    //   <img className="about-image-header" src={aboutimg} alt="" />

    // </div>
    <div className="aboutUs-all">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. elementum
          lgjkhbjhcbxjh sjcajs jkcakjbcsaskj shckjh euismod, Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <img className="aboutimg" src={aboutimg} alt=""></img>
      </div>
      <div className="about-us-descandimg">
        <div className="about-us">
          <h1>Find The Perfect Addition To Your Room</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia ex id est semper, in efficitur nulla convallis. Duis
            euismod, mauris ac pharetra eleifend, mauris nunc pellentesque
            lorem, sit amet tristique libero nunc eu nibh. Vivamus elementum
            libero vel massa efficitur, id posuere dolor ultrices.{" "}
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
            <img className="value-images" src={icon}></img>
            <h1>Goal</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia ex id est semper,
            </p>
          </div>
          <div className="values-box middle-about">
            <img className="value-images" src={icon}></img>
            <h1>Aim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia ex id est semper,
            </p>
          </div>
          <div className="values-box">
            <img className="value-images" src={icon}></img>
            <h1>Purpose</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia ex id est semper,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
