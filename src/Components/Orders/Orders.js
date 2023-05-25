import { useState, useEffect } from "react";
import axios from "axios";
import "../Orders/Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  // const [fullname, setFullName] = useState("")
  const [phonenumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  const getOrders = async (id) => {
    const find = await axios.get(
      `http://localhost:2000/orders/clientorder/64607f73b9808e0837852222`
    );
    const response = find.data.data;
    console.log(response);
    setOrders(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        address: address,
        // fullname: fullname,
        phonenumber: phonenumber,
        notes: notes,
      };

      const response = await axios.post(
        `http://localhost:2000/orders/64607f73b9808e0837852222`,
        data
       
      );
    
      console.log(response.data);

      
    } catch (error) {
      console.error(error);
    }
  };

console.log('orders',orders)
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="input-fields-orders">
      <form onSubmit={handleSubmit}>
        <div className="orderinputs-all">
          <h1>Fill the Form</h1>
          {/* <div>
          <input
            type="text"
            required
            value={fullname}
            placeholder="Full Name"
          ></input>
        </div> */}
          <div>
            <input
              type="number"
             
              value={phonenumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
             
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={notes}
             
              placeholder="Notes"
              onChange={(e) => setNotes(e.target.value)}
            ></input>
          </div>
          <button type="Submit" className="submit-btn">Submit</button>
        </div>
      </form>

      <div className="orders-all">
        <div>
          {orders && orders.map((item, index) => (
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
                    {/* {console.log(el.quantity)} */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
