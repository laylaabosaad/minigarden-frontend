import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import "./Navbar.css";
import img from "../images/lo.png";
import secureLocalStorage from "react-secure-storage";

const Navbar = (props) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const role = secureLocalStorage.getItem("role");
  const isAdmin = role === "admin";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
   const scrollToTop = () => {
     window.scrollTo(0, 0);
     setShowMenu(false)
   };

  const handleLogout = () => {
    window.localStorage.clear();
    props.setLoggedin(false);
    window.location.href = "/";
    secureLocalStorage.removeItem();
  };
  console.log("role", role);

  return (
    <div className="navbar">
      <div>
        <Link to="/" onClick={scrollToTop} className="navbar-logo">
          <img src={img}></img>
        </Link>
      </div>
      <div className={`navbar-links ${showMenu ? "active" : ""}`}>
        {!isAdmin && (
          <Link
            to="/"
            onClick={scrollToTop}
            className={`navlinks ${location.pathname === "/" ? "active" : ""}`}
          >
            <div className="nav">Home</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            to="/Aboutus"
            onClick={scrollToTop}
            className={`navlinks ${
              location.pathname === "/Aboutus" ? "active" : ""
            }`}
          >
            <div className="nav">About Us</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            to="/Products"
            onClick={scrollToTop}
            className={`navlinks ${
              location.pathname === "/Products" ? "active" : ""
            }`}
          >
            <div className="nav">Products</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            onClick={scrollToTop}
            to="/Contactus"
            className={`navlinks ${
              location.pathname === "/Contactus" ? "active" : ""
            }`}
          >
            <div className="nav">Contact Us</div>
          </Link>
        )}

        <div className="logandcart-nav">
          <div className="carta">
            {!isAdmin && (
              <Link
                onClick={scrollToTop}
                to="/Cart"
                className={`navlinks ${
                  location.pathname === "/Cart" ? "active" : ""
                }`}
              >
                <div className="nav">
                  <FaShoppingCart />
                </div>
              </Link>
            )}
          </div>

          {isAdmin && (
            <Link
              to="/admin/Products"
              onClick={scrollToTop}
              className={`navlinks ${
                location.pathname === "/admin/Products" ? "active" : ""
              }`}
            >
              <div className="nav">Products</div>
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/admin/Orders"
              onClick={scrollToTop}
              className={`navlinks ${
                location.pathname === "/admin/Order" ? "active" : ""
              }`}
            >
              <div className="nav">Orders</div>
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/admin/contactus"
              onClick={scrollToTop}
              className={`navlinks ${
                location.pathname === "/admin/contactus" ? "active" : ""
              }`}
            >
              <div className="nav">Messages</div>
            </Link>
          )}

          {props.loggedin === false ? (
            <Link
              to="/Login"
              onClick={scrollToTop}
              className={`navlinks ${
                location.pathname === "/Login" ? "active" : ""
              }`}
            >
              <div className="nav">
                <FiLogIn />
              </div>
            </Link>
          ) : (
            <div className="nav" onClick={handleLogout}>
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
