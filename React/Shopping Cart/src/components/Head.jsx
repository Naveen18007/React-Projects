import React from 'react'
import {Link} from "react-router-dom"
import './Head.css'

export const Head = () => {
  return (
    <div className='container'>
        <div>Food Cart</div>
        <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/cart"}>Cart</Link>
            </li>
        </ul>
        
    </div>
  )
}
