import React from 'react'
import SliderProducts from '../Components/Home/Featured items'
import ProductHeader from '../Components/Product/ProductHeader'
import "../Components/Product/Product.css"

function Products() {
  return (
    <div>
      <div className='product-header'>
        <ProductHeader/>
      </div>
      <div className='product-slider-page'>
        <SliderProducts/>
      </div>
    </div>
  )
}

export default Products