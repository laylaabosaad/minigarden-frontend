import {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
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
        <Link
          to="/Cart"
          className={`navlinks ${
            location.pathname === "/Cart" ? "active" : ""
          }`}
        >
          <div>Cart</div>
        </Link>
        <Link
          to="/Login"
          className={`navlinks ${
            location.pathname === "/Login" ? "active" : ""
          }`}
        >
          <div>Login</div>
        </Link>
      </div>
        <div className="navbar-toggle">
        <FaBars onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
