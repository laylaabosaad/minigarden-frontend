import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import "./Navbar.css";
import secureLocalStorage from "react-secure-storage";

const Navbar = (props) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const role = secureLocalStorage.getItem("role");
  const isAdmin = role === "admin";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
        <Link to="/" className="navbar-logo">
          <div>Logo</div>
        </Link>
      </div>
      <div className={`navbar-links ${showMenu ? "active" : ""}`}>
        {!isAdmin && (
          <Link
            to="/"
            className={`navlinks ${location.pathname === "/" ? "active" : ""}`}
          >
            <div>Home</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            to="/Aboutus"
            className={`navlinks ${
              location.pathname === "/Aboutus" ? "active" : ""
            }`}
          >
            <div>About Us</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            to="/Products"
            className={`navlinks ${
              location.pathname === "/Products" ? "active" : ""
            }`}
          >
            <div>Products</div>
          </Link>
        )}

        {!isAdmin && (
          <Link
            to="/Contactus"
            className={`navlinks ${
              location.pathname === "/Contactus" ? "active" : ""
            }`}
          >
            <div>Contact Us</div>
          </Link>
        )}

        <div className="logandcart-nav">
          {!isAdmin && (
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
          )}

          {isAdmin && (
            <Link
              to="/admin/Products"
              className={`navlinks ${
                location.pathname === "/admin/Products" ? "active" : ""
              }`}
            >
              <div>Products</div>
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/admin/Orders"
              className={`navlinks ${
                location.pathname === "/admin/Order" ? "active" : ""
              }`}
            >
              <div>Orders</div>
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/admin/contactus"
              className={`navlinks ${
                location.pathname === "/admin/contactus" ? "active" : ""
              }`}
            >
              <div>Messages</div>
            </Link>
          )}

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
