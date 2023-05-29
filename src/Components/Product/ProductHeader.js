import "./Product.css";
import hand from "../images/hand.png";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <div>
      <div className="aboutUs-all">
        <div className="about-us-header">
          <h1>Our Products</h1>
          <p>Find the perfect addition to your room</p>
        </div>
        {/* <img className="image-hand-header" src={hand} alt=""></img> */}
      </div>
    </div>
  );
}

export default ProductHeader;
