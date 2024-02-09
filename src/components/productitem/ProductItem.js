import React from 'react'
import './productItem.css'

function ProductItem(props) {
  const {product,removeItem} = props

  return (
    <div className='productItemContainer'>
        <p><strong>Product ID :</strong> {product.pid}</p>
        <h3><strong>Product Name :</strong>{product.pname}</h3>
        <h3><strong>Product Description :</strong>{product.pdesc}</h3>
        <h3><strong>Product Date :</strong>{product.pdate}</h3>
        <button onClick={removeItem}>REMOVE</button>

    </div>
  )
}

export default ProductItem
