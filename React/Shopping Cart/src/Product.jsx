import React from 'react'
import './Product.css'
export const Product = ({product,cart,setcart}) => {
  const addcart=()=>{
    setcart([...cart,product])
}
  const  removecart=()=>{
    setcart(cart.filter((c)=>c._id!== product._id))
  }
  return (
    <div className='product'>
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          {cart.includes(product) ? <button
          onClick={removecart} style={{backgroundColor:"red"}}>Remove From Cart</button> : <button onClick={addcart}>Add to Cart</button>}
      </div>
    </div>
  )
}
