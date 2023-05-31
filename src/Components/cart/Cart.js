import axios from "axios";
import { useState, useEffect, useReducer } from "react";

import "../cart/Cart.css";

import { Link } from "react-router-dom";
import "../Orders/Orders.css";
import swal from "sweetalert";

function Cart() {
  const [address, setAddress] = useState("");
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [productCard, setProductCard] = useState([]);

  let userId = localStorage.getItem("userId");

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://mini-garden.onrender.com/cart/${userId}`
      );
      const cartData = response.data.cart;
      if (Array.isArray(cartData)) {
        setProductCard(cartData);
      } else if (typeof cartData === "object") {
        setProductCard([cartData]);
      }

      console.log("useEffect ", productCard);
    } catch (error) {
      console.error(error);
    }
  };

  const showDisabled = () => {
    if (productCard.length == 0) setDisabled(true);
    else setDisabled(false);
  };

  const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://mini-garden.onrender.com/cart/${userId}/${itemId}`
      );

      let product_fake = productCard;
      product_fake[0].items = response.data.items;

      if (response.data.items.length == 0) {
        setProductCard([]);
      } else {
        setProductCard(product_fake);
        getProduct();
      }
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
      const response = await axios.post(
        `https://mini-garden.onrender.com/cart/${userId}`,
        data
      );

      let product_fake = productCard;
      product_fake[0].items = response.data.items;

      setProductCard(product_fake);
      getProduct();

      console.log("increase ", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
    showDisabled();
  }, []);

  useEffect(() => {
    showDisabled();
  }, [productCard]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        address: address,
        fullname: fullname,
        phonenumber: phonenumber,
        notes: notes,
      };

      if (!userId) {
        swal({
          title: "Login to make an order",
          text: "You need to login!",
          icon: "warning",
          button: "Login",
        }).then(() => {
          window.location.href = "/login";
        });
      } else {
        swal({
          title: "Your order was sent",
          text: "You need to login!",
          icon: "success",
          button: "ok",
        }).then(() => {
          window.location.href = "/";
        });
        const response = await axios.post(
          `https://mini-garden.onrender.com/orders/${userId}`,
          data
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                          onClick={() => deleteItem(productItem?.productId._id)}
                        >
                          -
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
            <div className="emptycart">
              <h3>Your cart is empty. Add some products to your cart</h3>
              <Link to="/Products">
                <button className="submit-btn">Products</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="input-fields-orders">
        <form onSubmit={handleSubmit}>
          <div className="orderinputs-all">
            <div className="tofit">
              <h1>Checkout</h1>
              <label>Full Name</label>
              <div>
                <input
                  type="text"
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                ></input>
              </div>
              <label>Phone Number</label>
              <div>
                <input
                  type="tel"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
              <label>Address</label>
              <div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
              <label>Additional Information</label>
              <div className="notecheckout">
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></input>
              </div>
              {disabled ? (
                <button type="submit" disabled>
                  {/* Submits {productCard.length} */}
                  Submit
                </button>
              ) : (
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
