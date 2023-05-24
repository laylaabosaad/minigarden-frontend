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

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/admin/Products" element={<ProductAdmin />} />
        <Route path="/Products/:categoryId" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupComponent />} />
        <Route path="/Checkout" element={<Orders />} />
        <Route path="/Contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
