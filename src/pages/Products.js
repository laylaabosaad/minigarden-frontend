import {useEffect, useState} from 'react'

import ProductHeader from '../Components/Product/ProductHeader'
import "../Components/Product/Product.css"
import Productsection from "../Components/Product/Productsection";
import Footer from '../Components/Footer/Footer';
import Loader from '../Components/loader/Loader';

function Products() {

     const [loading, setLoading] = useState(true);
     useEffect(() => {
       setTimeout(() => {
         setLoading(false);
       }, 5000);
     }, []);

     if (loading) {
       return <Loader />;
     }
  return (
    <div>
      <div className="product-header">
        <ProductHeader />
      </div>

      <div>
        <div className="product-slide">
          <h1 className="ourproduct">Our Products</h1>
         
        </div>
        <Productsection />
      </div>
      <Footer/>
    </div>
  );
}

export default Products