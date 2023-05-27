
import axios from "axios"
import { useState, useEffect } from "react"
function Ordersadmin() {

  const [orders, setOrders]= useState([])

  const getOrders = async () => {
    const find = await axios.get("http://localhost:2000/orders", {})
    const res = find.data.data
    setOrders(res)
    // console.log(res)
    
  }

  useEffect(() => {
    getOrders()
  
},[])


  return (
    <div className="orders-all">
      <div>
        {orders &&
          orders.map((item, index) => (
            <div key={index}>
              <div>Bill:{item.bill}</div>
              <div>Adress:{item.address}</div>
              <div>NOtes:{item.notes}</div>
              <div>Phone:{item.phonenumber}</div>
              <div>Name:{item.userId.fullname}</div>
              <div>
                {item.items.map((el, idx) => (
                  <div key={idx}>
                    <h1>Quantity:{el.quantity}</h1>
                    <h1>Product name:{el.productId?.title}</h1>
                    <h1>Price:{el.productId?.price}</h1>
                    {console.log(el.quantity)}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ordersadmin