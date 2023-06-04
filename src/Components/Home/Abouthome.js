import { Link } from "react-router-dom";
import "../Home/Abouthome.css";
import about from "../images/abouthome.jpg";

function Abouthome() {
  return (
    <div className="aboutus-home-all">
      <div className="aboutus-home">
        <div className="aboutus-home-descandbtn">
          <h1>About Us</h1>
          <p>
          
            <br></br>We believe in the power of nature to transform spaces and
            uplift the human spirit. We are dedicated to creating captivating
            terrariums that bring the beauty and tranquility of the outdoors
            into your working environment.
          </p>

          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">
              <Link className="aboutlink" to="/Aboutus">
                Read More
              </Link>
            </span>
          </button>
        </div>
        <div className="aboutus-homeimgback">
          <img className="aboutus-homeimg" src={about} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Abouthome;
