import React, { useState } from 'react'
import './productlistpractice.css'
import ProductItem from '../../components/productitem/ProductItem'

function ProductListPractice() {
    const initialInputs = {
        pid: '',
        pname: '',
        pdesc: '',
        pdate: ''
    }
    const [plInputs, setPlInputs] = useState(initialInputs)

    const [products, setProducts]= useState([])

    const handleChange = (e)=>{
       
        setPlInputs((input)=>(
            {...input,[e.target.name]: e.target.value}
        ))
    }

    const createProduct = (e)=>{
        e.preventDefault()
        setProducts((product)=>(
            [...product,plInputs]
        ))
    }

    const removeItem = (id)=>{
        setProducts((product)=>product.filter((product)=>product.pid !==id))
        console.log('Remove console')
    }

    console.log(products)
  return (
    <div className='product-list'>
        <h1 className="productlist-title"> CAREATE PRODUCT BELOW</h1>

        <div className="product-list-form-container">
            <form action="" className="product-list-form">
                {/* <div className="input-label">
                    <label htmlFor="pid">Product Id</label>
                    <input className='pl-input' type="text" name='pid' id='pid' placeholder='1' onChange={handleChange} />
                </div> */}
                <div className="input-label">
                    <label htmlFor="pid">Product Id</label>
                    <input className='pl-input' type="text" name='pid' id='pid' placeholder='Product Id' onChange={handleChange} />
                </div>
                <div className="input-label">
                    <label htmlFor="pname">Product Name</label>
                    <input className='pl-input' type="text" name='pname' id='pname' placeholder='Cocacola' onChange={handleChange} />
                </div>
                <div className="input-label">
                    <label htmlFor="pdesc">Product Description</label>
                    <input className='pl-input' type="text" name='pdesc' id='pdesc' placeholder='Description' onChange={handleChange} />
                </div>
                <div className="input-label">
                    <label htmlFor="pdesc">Product Date</label>
                    <input className='pl-input' type="text" name='pdate' id='pdate' placeholder='23rd May 1995' onChange={handleChange} />
                </div>
                <button onClick={createProduct} className="product-list-button">
                    Create
                </button>
            </form>
        </div>

        <div className="product-list-display-container">
            {products.map((product)=>(
                <ProductItem product = {product} removeItem = {()=>removeItem(product.pid)}/>
            ))}
        </div>
    </div>
  )
}

export default ProductListPractice
