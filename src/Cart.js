import React from 'react'
import Navigation from './Navigation'

const Cart = (props) => {
    console.log(props)
    return (
        <div>
            <Navigation/>
            <h1>Cart</h1>
            {props.cart.map((item,index)=>{
                return(<div key={index}>
                    {item.title}
                    <img src={item.image} alt={item.description} style={{maxWidth:"200px"}} />
                    </div>)
            })}
        </div>
    )
}

export default Cart
