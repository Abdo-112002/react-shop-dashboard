
import React from 'react'
import FilterProduct from './FilterProduct'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'

function UploadProducts() {
  return (
    <div className='container'>
        <div className='uploadImages'>
            <ProductDetails/>
            <section className='filterWrapper'>
                <FilterProduct/>
                <ProductList/>
            </section>
        </div>
    </div>
  )
}

export default UploadProducts
