import React from 'react'

import ProductHeader from '../Components/Product/ProductHeader'
import "../Components/Product/Product.css"
import Productsection from "../Components/Product/Productsection";

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
    </div>
  );
}

export default Products