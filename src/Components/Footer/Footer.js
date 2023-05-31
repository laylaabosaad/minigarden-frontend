import "../Footer/Footer.css";
import img from "../images/lo.png";
import { useLocation } from "react-router-dom";

import { FaPhone } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const location = useLocation();


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-container">
      <div className="footer-container-details">
        <div className="footer-title3">
          <Link to="/" onClick={scrollToTop}>
            <img
              onClick={scrollToTop}
              src={img}
              alt="logo"
              className="footer-logo"
            />
          </Link>

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
            <a className="anchormail" href="mailto:laylaabosaad@gmail.com">laylaabosaad@gmail.com</a>
          </div>
        </div>
        <div className="footer-title1">
          <h1>Menu</h1>
          <div>
            <Link to="/" onClick={scrollToTop}>
              <div className="links-fot">Home</div>
            </Link>
          </div>
          <div>
            <Link to="/aboutus" onClick={scrollToTop}>
              <div className="links-fot">About Us</div>
            </Link>
          </div>
          <div>
            <Link to="/products" onClick={scrollToTop}>
              <div className="links-fot">Products</div>
            </Link>
          </div>

          <div>
            <Link to="/contactus" onClick={scrollToTop}>
              <div className="links-fot">Contact Us</div>
            </Link>
          </div>
        </div>
        <div className="footer-title2">
          <h1>Account</h1>
          <div>
            <div>
              <Link to="/signup" onClick={scrollToTop}>
                <div className="links-fot">Sign Up</div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/login" onClick={scrollToTop}>
              <div className="links-fot">login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
