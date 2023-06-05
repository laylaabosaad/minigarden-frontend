import Footer from "../Components/Footer/Footer.js";
import Carts from "../Components/cart/Cart.js";
import Loader from "../Components/loader/Loader.js";
import { useState, useEffect } from "react";
function Cart() {

     const [loading, setLoading] = useState(true);
     useEffect(() => {
       setTimeout(() => {
         setLoading(false);
       }, 2000);
     }, []);

     if (loading) {
       return <Loader />;
     }
  return (
    <div>
    
      <Carts />
      <Footer />
    </div>
  );
}

export default Cart;
