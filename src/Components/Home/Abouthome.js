import { Link } from "react-router-dom";
import "../Home/Abouthome.css"
import about from "../images/abouthome.jpg"

function Abouthome() {
  return (
    <div className="aboutus-home-all">
      <div className="aboutus-home">
        <div className="aboutus-home-descandbtn">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia ex id est semper, in efficitur nulla convallis. Duis
            euismod, mauris ac pharetra eleifend, mauris nunc pellentesque
            lorem, sit amet tristique libero nunc eu nibh. Vivamus elementum
            libero vel massa efficitur, id posuere dolor ultrices.
          </p>

          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              <Link className="aboutlink" to="/Aboutus">Read More</Link>
            </span>
          </button>
        </div>
        <div className="aboutus-homeimgback">
          <div className="aboutus-homeimgb"></div>
          <img className="aboutus-homeimg" src={about} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Abouthome