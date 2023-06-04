import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./singleprod.css";
import Footer from "../Footer/Footer.js";
import axios from "axios";
import swal from "sweetalert";

function Singleproduct() {
  let userId = localStorage.getItem("userId");
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

   const addtoCart = async (productId, quantity, price, title) => {
     try {
       const data = {
         productId: productId,
         quantity: quantity,
         price: price,
         title: title,
       };
       if (!userId) {
         swal({
           title: "Login to add to cart",
           text: "You need to login!",
           icon: "warning",
           button: "Login",
         }).then(() => {
           window.location.href = "/login";
         });
       } else {
         await axios.put(
           `https://mini-garden.onrender.com/cart/${userId}`,
           data
         );
         swal({
           title: "Item added to cart",
           text: "Item Added Successfully",
           icon: "success",
           button: "Continue Shopping",
         });
       }
     } catch (error) {
       console.error(error);
     }
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
                  <button
                    className="productbtnaddanddesc"
                    onClick={() =>
                      addtoCart(singleProd._id, 1, singleProd.price, singleProd.title)
                    }
                  >
                    Add to cart
                  </button>
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
