import React,{useState} from 'react'

const Product = ({product,setCartHandler}) => {
    const {id,title,image,description,price} = product
    const [readMore,setReadMore] = useState(false)
    
    return (
        <div>
            <h3>{title} </h3>
            <img src={image} alt={description} style={{maxWidth:"200px"}}/>
            <p>{readMore?description:`${description.substring(0,200)}...`} </p>
            <h3>{`$ ${price}`} </h3>
            <button onClick={()=>setReadMore(!readMore)}>{readMore?"Show less":"Show More"} </button>
            <button onClick={()=>setCartHandler(product)}>Add to Cart</button>
        </div>
    )
}

export default Product
