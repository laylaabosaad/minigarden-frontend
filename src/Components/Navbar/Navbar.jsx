import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    props.setLoggedin(false);
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/" className="navbar-logo">
          <div>Logo</div>
        </Link>
      </div>
      <div className={`navbar-links ${showMenu ? "active" : ""}`}>
        <Link
          to="/"
          className={`navlinks ${location.pathname === "/" ? "active" : ""}`}
        >
          <div>Home</div>
        </Link>
        <Link
          to="/Aboutus"
          className={`navlinks ${
            location.pathname === "/Aboutus" ? "active" : ""
          }`}
        >
          <div>About Us</div>
        </Link>
        <Link
          to="/Products"
          className={`navlinks ${
            location.pathname === "/Products" ? "active" : ""
          }`}
        >
          <div>Products</div>
        </Link>

        <Link
          to="/Contactus"
          className={`navlinks ${
            location.pathname === "/Contactus" ? "active" : ""
          }`}
        >
          <div>Contact Us</div>
        </Link>
        <div className="logandcart-nav">
          <Link
            to="/Cart"
            className={`navlinks ${
              location.pathname === "/Cart" ? "active" : ""
            }`}
          >
            <div>
              <FaShoppingCart />
            </div>
          </Link>

          {props.loggedin === false ? (
            <Link
              to="/Login"
              className={`navlinks ${
                location.pathname === "/Login" ? "active" : ""
              }`}
            >
              <div>
                <FiLogIn />
              </div>
            </Link>
          ) : (
            <div onClick={handleLogout}>
              <FiLogOut />
            </div>
          )}
        </div>
      </div>
      <div className="navbar-toggle">
        <FaBars onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
