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
    <div className="cart-all">
      <div className="titleanditems">
        <h1>Cart</h1>
        <div className="Shoppingcart-table">
          {Array.isArray(productCard) ? (
            productCard.map((item, index) => (
              <div className="cart-checkoutandtable">
                <div className="Shoppingcart-all" key={index}>
                  <div className="titles-cart">
                    <div>
                      <h2>Product</h2>
                    </div>
                    <div>
                      <h2>Quantity</h2>
                    </div>
                  </div>
                  {item.items.map((productItem, productIndex) => (
                    <div className="shoppingcart-items" key={productIndex}>
                      <div className="img-price-title-cart">
                        {productItem.productId &&
                          productItem.productId.image && (
                            <div className="bkrndimgcart">
                              <img
                                src={productItem.productId.image.url}
                                alt={productItem.productId.title}
                              />
                            </div>
                          )}

                        <div>
                          <h3> {productItem.productId.title}</h3>
                          <p className="price-cart">
                            {productItem.productId.price}$
                          </p>
                        </div>
                      </div>

                      <div className="quantitybtnsall">
                        <button
                          className="btnremove"
                          onClick={() =>
                            deleteItem(item.userId, productItem.productId._id)
                          }
                        >
                          -
                        </button>
                        <h4> {productItem.quantity}</h4>
                        <button>+</button>
                      </div>
                    </div>
                  ))}
                </div>
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
      <div className="rightsection-cart">
        <div className="btnandLinkcart">
          <h1>One Step Away </h1>
          <button className="checkoutbtn">
            <Link className="checkoutlink" to="/Checkout">
              Go to Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
