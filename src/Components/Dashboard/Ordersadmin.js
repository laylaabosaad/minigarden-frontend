import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import "../Dashboard/ordersadmin.css";
function Ordersadmin() {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useReducer((x) => x + 1, 0);

  const getOrders = async () => {
    const find = await axios.get("http://localhost:2000/orders", {});
    const res = find.data.data;
    setOrders(res);
    // console.log(res)
  };

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:2000/orders/${orderId}`
      );
      const remove = response.data;

      setRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [refresh]);

  return (
    <div className="orders-all">
      <div className="backgrnd">
        <h1 className="prodtitle-admin">Orders</h1>
      </div>
      <div className="adminorders">
        {orders &&
          orders.map((item, index) => (
            <div className="order-admincards" key={index}>
              <div className="roworders">
                <label>
                  <strong> Name:</strong>
                </label>
                <h4>{item.userId.fullname}</h4>
              </div>
              <div className="roworders">
                <label>
                  <strong>Phone Number:</strong>
                </label>

                <h4>{item.phonenumber}</h4>
              </div>
              <div className="roworders">
                <label>
                  <strong> Address:</strong>
                </label>
                <h4>{item.address}</h4>
              </div>
              <div className="roworders">
                <label>
                  <strong> Notes</strong>
                </label>
                <h4>{item.notes}</h4>
              </div>

              <div className="products-ordersadmin">
                <label>
                  <strong>Products:</strong>
                </label>
                {item.items.map((el, idx) => (
                  <div key={idx}>
                    <h5>Quantity:{el.quantity}</h5>
                    <h5>Product name:{el.productId?.title}</h5>
                    <h5>Price:{el.productId?.price}</h5>
                    {console.log(el.quantity)}
                  </div>
                ))}
              </div>
              <div className="billorder-admin">
                <h2>Bill:{item.bill} $</h2>
              </div>
              <button
                className="submit-btn"
                onClick={() => deleteOrder(item._id)}
              >
                Delete
              </button>
              <button></button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ordersadmin;
