import React, { useState } from 'react'
import data from '../assets/items.json'
import { Product } from '../Product'
import './Home.css'
export const Home = ({cart,setcart}) => {
  const [products]=useState(data)
  return (
    
    <div className="contain">
      {products.map((product)=>(
         <Product key={product._id} product={product} cart={cart} setcart={setcart}/> 
      ))}
    </div>
  )
}
