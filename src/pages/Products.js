import React from 'react'

import ProductHeader from '../Components/Product/ProductHeader'
import "../Components/Product/Product.css"
import Productsection from "../Components/Product/Productsection";
import Footer from '../Components/Footer/Footer';

function Products() {
  return (
    <div>
      <div className="product-header">
        <ProductHeader />
      </div>

      <div>
        <div className="product-slide">
          <h1 className="ourproduct">Our Product</h1>
         
        </div>
        <Productsection />
      </div>
      <Footer/>
    </div>
  );
}

export default Products