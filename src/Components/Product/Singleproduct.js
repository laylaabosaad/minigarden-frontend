import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Singleproduct() {
  const { productId } = useParams();
  const [singleProd, setSingleProd] = useState([]);

  const singleproduct = async () => {
    const find = await axios.get(`http://localhost:2000/product/${productId}`);
    const res = find.data;
    setSingleProd(res.data);
    // console.log(find.data);
  };

  useEffect(() => {
    singleproduct();
  }, []);

  return (
    <div className="product-section">
      <div className="productsection-cards">
        {singleProd && (
          <div>
            <p>{singleProd.title}</p>
            <p>{singleProd.description}</p>
            <p>{singleProd.stock}</p>
            <p>{singleProd.price}</p>
            {singleProd && singleProd.image && (
              <div className="bkrndimgcart">
                <img src={singleProd.image.url} alt="" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Singleproduct;
