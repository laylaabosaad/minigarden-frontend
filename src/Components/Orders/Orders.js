import { useState,useEffect } from "react"
import axios from "axios";

function Orders() {
    const [orders, setOrders] = useState([])

    const getOrders =async (id) => {
        const find = await axios.get(`http://localhost:2000/orders/${id}`);
        const response = find.data.data
        console.log(find.data)
        setOrders(response)
    }

    useEffect(() => {
        getOrders()
        
    },[])
    


  return (
      <div className="orders-all">
          {/* <div>
              {orders.map((item, index) => (
                  <div key={index}>
                      <div>{item.adress }</div>
                      
                  </div>
                  
              ))}
              
          </div> */}
          
    </div>
  )
}

export default Orders