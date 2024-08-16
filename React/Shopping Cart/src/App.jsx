import { useState } from 'react'
import './App.css'
import { Head } from './components/Head'
import { Home } from './components/Home'
import { Cart } from './components/Cart'
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const [cart,setcart]=useState([])
  return (
    <>
      <BrowserRouter>
        <Head/>
        <Routes>
          <Route path="/"  element={<Home cart={cart} setcart={setcart}/>} />
          <Route path="/cart"  element={<Cart cart={cart} setcart={setcart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
