import React from 'react'

import ProductHeader from '../Components/Product/ProductHeader'
import "../Components/Product/Product.css"
import Laylaproduct from '../Components/Product/Productsection'

function Products() {
  return (
    <div>
      <div className='product-header'>
        <ProductHeader/>
      </div>
     
      <div>
        <Laylaproduct/>
      </div>
    </div>
  )
}

export default Products