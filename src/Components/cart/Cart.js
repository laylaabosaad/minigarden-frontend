import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cart/Cart.css";

function Cart() {
  const [productCard, setProductCard] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2000/cart/64607f73b9808e0837852222"
      );
      const cartData = response.data.cart;
      console.log(response.data);
      if (Array.isArray(cartData)) {
        setProductCard(cartData);
      } else if (typeof cartData === "object") {
        setProductCard([cartData]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (userId, itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/cart/64607f73b9808e0837852222/${itemId}`
      );
      const updatedCart = response.data;
      if (Array.isArray(updatedCart)) {
        setProductCard(updatedCart);
      } else if (typeof updatedCart === "object") {
        setProductCard([updatedCart]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="titleanditems">
      <div>
        <div className="Shoppingcart-table">
          {Array.isArray(productCard) ? (
            productCard.map((item, index) => (
              <div className="Shoppingcart-all" key={index}>
                {item.items.map((productItem, productIndex) => (
                  <div className="shoppingcart-items" key={productIndex}>
                    {productItem.productId && productItem.productId.image && (
                      <div className="bkrndimgcart">
                        <img
                          src={productItem.productId.image.url}
                          alt={productItem.productId.title}
                        />
                      </div>
                    )}
                    <p>Title: {productItem.productId.title}</p>
                    <div className="quantitybtnsall">
                      <button
                        className="btnremove"
                        onClick={() =>
                          deleteItem(item.userId, productItem.productId._id)
                        }
                      >
                        -
                      </button>
                      <p> {productItem.quantity}</p>
                      <button>+</button>
                    </div>
                    <p className="price-cart">Price: {productItem.productId.price}$</p>
                  </div>
                ))}
                <div className="total">
                  <h2>Total Bill:</h2>
                  <p> {item.bill}$</p>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>
      <div>
        <button className="checkoutbtn">
          <Link className="checkoutlink" to="/Checkout">
            Go to Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
