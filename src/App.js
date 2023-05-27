import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./pages/Products";
// import Slider from "react-slick";
// import SliderProducts from "./Components/Home/Featured items";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignupComponent from "./Components/LoginAndSignup/SignupComponent";
import Orders from "./Components/Orders/Orders";
import ProductAdmin from "./Components/Dashboard/ProductAdmin";
import { useEffect, useState } from "react";
import Singleproduct from "./Components/Product/Singleproduct";
import Productsection from "./Components/Product/Productsection";
import Ordersadmin from "./Components/Dashboard/Ordersadmin";
import UserContact from "./Components/Dashboard/UserContact";

function App() {
  const [loggedin, setLoggedin] = useState(false);

  const isLogged = () => {
    let logged = localStorage.getItem("token");
    if (logged) setLoggedin(true);
    else setLoggedin(false);
  };
  useEffect(() => {
    isLogged();
  }, []);

  return (
    <div className="App">
      {/* <Navbar loggedin={loggedin} setLoggedin={setLoggedin} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Products" element={<Products />} />
        {/* <Route path="/Products/:categoryId" element={<Productsection />} /> */}
        <Route path="/admin/Products" element={<ProductAdmin />} />
        <Route path="/singleproduct/:productId" element={<Singleproduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin/Orders" element={<Ordersadmin />} />
        <Route path="/admin/contactus" element={<UserContact />} />

        <Route path="/Signup" element={<SignupComponent />} />
        <Route path="/Checkout" element={<Orders />} />
        <Route path="/Contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
