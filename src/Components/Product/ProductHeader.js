import "./Product.css";
import hand from "../images/hand.png";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <div>
      <div className="product-header-all">
        <div className="product-h1Header">
          <h1>Find The Perfect Addition To Your Room</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lacinia ex id est semper, in efficitur nulla convallis. Duis
            euismod,
          </h5>
        </div>
        <img className="image-hand-header" src={hand} alt=""></img>
      </div>
      <div className="product-slide">
        <h1 className="ourproduct">Our Product</h1>
        <div className="product Menu">
          <Link to="/closedterrarium">Closed Terrarium</Link>

        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
