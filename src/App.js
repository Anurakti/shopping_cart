import './App.css';
import React,{useState,useEffect} from 'react';
import Loading from './Loading';
import Products from './Products';
import Navigation from './Navigation';
import Cart from './Cart';
import {HashRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  const url = "https://fakestoreapi.com/products"
  const [loading,setLoading] = useState(true)
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])

  const fetchProducts = async()=>{
    setLoading(true)
    try{
      const response  = await fetch(url)
      const products = await response.json()
      setLoading(false)
      setProducts(products)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  if(loading){
    return(
      <Loading/>
    )
  }

  const setCartHandler=(product)=>{
    setCart([product,...cart])
  }

  console.log("cart",cart)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigation/>} ></Route>
          <Route exact path="/products" element={<Products products={products} setCartHandler={setCartHandler} />}></Route>
          <Route exact path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
