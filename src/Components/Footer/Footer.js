
import "../Footer/Footer.css";
import img from "../images/icon.png";

import { FaPhone } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-details">
        <div className="footer-title3">
          <img src={img} alt="logo" className="footer-logo" />

          <div className="footer-social-contact">
            <div>
              <FaPhone />
            </div>
            <div> +961 70605255</div>
          </div>
          <div className="footer-social-contact">
            <div>
              <FaRegEnvelopeOpen />
            </div>
            <div>Laylaabosaad@gmail.com</div>
          </div>
        </div>
        <div className="footer-title1">
          <h1>Menu</h1>
          <div><Link></Link></div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Products</div>
        </div>
        <div className="footer-title2">
          <h1>Account</h1>
          <div>Sign up</div>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
