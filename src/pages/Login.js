import axios from "axios";
import { useState, useEffect } from "react";

function Cart() {
  const [productCard, setProductCard] = useState([]);

  const getProduct = async () => {
    const find = await axios.get("http://localhost:2000/product/");
    let response = find.data.data;
    setProductCard(response);
    console.log(response);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div>
        <div>Helloo</div>
        {productCard.map((item, index) => {
          <div key={index}>
            <p>{item}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Cart;
