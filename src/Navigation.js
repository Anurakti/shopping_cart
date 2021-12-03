import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <h3>Anurakti</h3>
            <ul>
                <li>
                    <Link to="/products" style={{color:"white"}}>Products</Link>
                </li>
                <li>
                    <Link to="/cart" style={{color:"white"}}>Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
