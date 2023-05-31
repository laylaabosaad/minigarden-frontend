import { useState, useEffect } from "react";
import axios from "axios";
import terr from "../images/terr.png";
import "../Orders/Orders.css";
import swal from "sweetalert";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  let userId = localStorage.getItem("userId");

  const getOrders = async (id) => {
    const find = await axios.get(
      `https://mini-garden.onrender.com/orders/clientorder/${userId}`
    );
    const response = find.data.data;
    console.log(response);
    setOrders(response);
  };

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

        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log("orders", orders);
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="input-fields-orders">
      <div className="imgcont">
        <img src={terr} alt=""></img>
      </div>

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
            <button type="Submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* <div className="orders-all">
        <div>
          {orders &&
            orders.map((item, index) => (
              <div key={index}>
                <div>{item.bill}</div>
                <div>{item.address}</div>
                <div>{item.notes}</div>
                <div>{item.phonenumber}</div>
                <div>{item.userId.fullname}</div>
                <div>
                  {item.items.map((el, idx) => (
                    <div key={idx}>
                      <h1>{el.productId?.quantity}</h1>
                      <h1>{el.productId?.price}</h1>
                      {console.log(el.quantity)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
}

export default Orders;
