import React, { useState } from 'react'
import './productlist.css'
import Product from '../../components/product/Product'

function ProductList() {
    const initialinput = {
        id:'',
        name:'',
        type:'',
        desc:'',
        status:'',
        date:'',
    }
    const [productInput, setProductInput] = useState(initialinput)

    const [product, setProduct] = useState([])

    const handleChange = (e)=>{
        setProductInput((input)=>(
            {...input,[e.target.name]: e.target.value}
        ))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setProduct(product=>([...product,productInput]))
        setProductInput(initialinput)
    }
    console.log(product)
    console.log(productInput)
  return (
    <div className="container">
        <h1 className='title'>Product List</h1>
        <h2 className='plformtitle'>Create Product list</h2>
        <div className="plform">
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="product-id">
                        Product Id:
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-id" type="text" value={productInput.id} name='id'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="product-name">
                        Product Name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-name" type="text" value={productInput.name} name='name'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="product-type">
                        Product Type
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-type" type="text" value={productInput.type} name='type'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="product-description">
                        Product Description
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="product-description" type="text" value={productInput.desc} name='desc'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Status">
                        Status
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="status" type="text" value={productInput.status} name='status'/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="date">
                        Date Created
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date" type="text" value={productInput.date} name='date'/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button onClick={handleSubmit} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Sign Up
                    </button>
                    </div>
                </div>
            </form>
        </div>
        <section className="productlistcont">
            {product.map((product)=> <Product product = {product}/>)}
        </section>

    </div>
  )
}

export default ProductList
