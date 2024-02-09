import React from 'react'

function Product({product}) {

  return (
    <div className='product'>
        <h3><strong>product id:</strong>{product.id}</h3>
        <p><strong>product name:</strong> {product.name}</p>
        <p><strong>product type:</strong> {product.type}</p>
        <p><strong>product description:</strong> {product.description}</p>
        <p><strong>product status:</strong> {product.status}</p>
        <p><strong>product date :</strong>{product.date}</p>
    </div>
  )
}

export default Product
