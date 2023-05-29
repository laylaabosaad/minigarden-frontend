import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import "../cart/Cart.css";

function Cart() {
  let userId = localStorage.getItem("userId")
  
  const [refresh, setRefresh] = useReducer((x) => x + 1, 0);
  const [productCard, setProductCard] = useState([]);
  console.log(refresh);
  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/cart/${userId}`);
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

  const handlecheckout = () => {
    const token= localStorage.getItem("token")
    if (!token) {
    window.location.href = "/Login";
      return;
    } else {
       
       window.location.href = "/Checkout";
    }
  }

  const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/cart/${userId}/${itemId}`
      );
      const updatedCart = response.data;

      setRefresh();
      setProductCard(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  const Increaseproduct = async (productId) => {
    try {
      const data = {
        productId: productId,
        quantity: 1,
      };

      console.log("data ", data);

      const response = await axios.post(
        `http://localhost:2000/cart/${userId}`,
        data
      );
      setRefresh();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [refresh]);

  return (
    <div className="cart-all">
      <div className="titleanditems">
        <h1>Cart</h1>
        <div className="Shoppingcart-table">
          {productCard.length > 0 ? (
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
                            <div className="imgmini-cart">
                              <img
                                src={productItem.productId.image.url}
                                alt={productItem.productId?.title}
                              />
                            </div>
                          )}

                        <div>
                          <h3>
                            {productItem.productId?.title}
                            {/* {productItem.productId._id} */}
                          </h3>
                          <p className="price-cart">
                            {/* ? is  */}
                            {productItem.productId?.price}$
                          </p>
                        </div>
                      </div>

                      <div className="quantitybtnsall">
                        <button
                          className="btnremove"
                          onClick={() =>
                            deleteItem(productItem?.productId._id)
                          }
                        >
                          {console.log("deleteeee", item.userId)}-
                        </button>
                        <h4> {productItem?.quantity}</h4>
                        <button
                          className="btnremove"
                          onClick={() =>
                            // ? is to prevent the map is not a function since incase i have deleted the product and its in the cart it checks if its present
                            Increaseproduct(productItem.productId?._id)
                          }
                        >
                          +
                        </button>
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
            <p>Your cart is empty. Add items to the cart</p>
          )}
        </div>
      </div>
      <div className="rightsection-cart">
        <div className="btnandLinkcart">
          <h1>One Step Away </h1>
          <button className="checkoutbtn">
            <div className="checkoutlink" onClick={handlecheckout}>
              Go to Checkout
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
