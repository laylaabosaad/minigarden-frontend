import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./pages/Products";
import Slider from "react-slick";
// import SliderProducts from "./Components/Home/Featured items";
import Cart from "./pages/Cart";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/path/to/another/page" element={<Products />} />
        <Route path="/Cart" element={<Cart/>} />

        <Route path="/Contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
