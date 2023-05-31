import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./singleprod.css";
import Footer from "../Footer/Footer.js";
import axios from "axios";

function Singleproduct() {
  const { productId } = useParams();
  const [singleProd, setSingleProd] = useState([]);

  const singleproduct = async () => {
    const find = await axios.get(
      `https://mini-garden.onrender.com/product/${productId}`
    );
    const res = find.data;
    setSingleProd(res.data);
    // console.log(find.data);
  };

  useEffect(() => {
    singleproduct();
  }, []);

  return (
    <div className="product-section">
      <div className="productsection-cards">
        {singleProd && (
          <div className="image-description-single">
            {singleProd && singleProd.image && (
              <div className="bkrndimgcart">
                <div className="lay">
                  <img src={singleProd.image.url} alt="" />
                </div>
              </div>
            )}
            <div className="single-info">
              <p>
                <strong>Product Name: </strong> {singleProd.title}
              </p>
              <p>
                <strong>Description: </strong>
                {singleProd.description}
              </p>

              <p>
                <strong> Price: </strong>
                {singleProd.price}$
              </p>
              <div className="btns-single">
                <div className="product-buttons">
                  <Link to="/Products">
                    <button className="submit-btn">Go Back</button>
                  </Link>
                </div>
                <div className="product-buttons">
                  <button className="submit-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Singleproduct;
