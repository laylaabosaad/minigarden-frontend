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
        <div>zzzzz</div>
        {console.log("productCard ", productCard)}
        {productCard.map((item, index) => (
          <div key={index}>
            <p> {item.title}</p>
            <p> {item.category.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <img src={item.image.url}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
