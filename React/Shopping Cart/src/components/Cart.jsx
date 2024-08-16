import React, { useEffect, useState } from 'react'
import './Cart.css'

export const Cart = ({cart,setcart}) => {
  const[amount,setamount]=useState(0)
  useEffect(()=>{
    setamount(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[cart])
  return (
  <>
    <h1>Cart Products</h1>
      <div className='cartcontainer'>
        {
          cart.map((product)=>(
            <div className="cartproducts" key={product._id}>
             <div className="images">
               <img src="https://placehold.co/100x100" alt="" />
             </div>
             <div className="itemdetails">
               <h3>{product.name}</h3>
               <p>{product.price}</p>
             </div>
            </div>
          ))}
    </div>
    <h2>Total Amount:{amount}</h2>
  </>
  )
}
