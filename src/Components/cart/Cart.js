import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [productCard, setProductCard] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2000/cart/64607f73b9808e0837852222"
      );
      const cartData = response.data.cart;
      console.log(response.data)
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
    <div>
      <div>
        <div>zzzzz</div>
        {Array.isArray(productCard) ? (
          productCard.map((item, index) => (
            <div key={index}>
              <p>Total Bill: {item.bill}</p>
              {item.items.map((productItem, productIndex) => (
                <div key={productIndex}>
                  <p>Title: {productItem.productId.title}</p>
                  <p>Price: {productItem.productId.price}</p>
                  <p>Quantity: {productItem.quantity}</p>
                  {productItem.productId && productItem.productId.image && (
                    <img
                      src={productItem.productId.image.url}
                      alt={productItem.productId.title}
                    />
                  )}
                  <button
                    onClick={() =>
                      deleteItem(item.userId, productItem.productId._id)
                    }
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div>
        <button>
          <Link to="/Checkout">Go to Checkout</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
