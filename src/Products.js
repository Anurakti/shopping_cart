import React from 'react'
import Product from './Product'
import Navigation from './Navigation'

const Products = ({products,setCartHandler}) => {
    return (
        <div>
            <Navigation/>
            {products.map((product,index)=>{
                return <Product key={index} product={product} setCartHandler={setCartHandler} />
            })}
        </div>
    )
}

export default Products
