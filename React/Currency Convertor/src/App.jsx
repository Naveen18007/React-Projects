import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [Amount,setamount]=useState(1)
  const [fromcurrency,setfromcurrency]=useState("USD")
  const [tocurrency,settocurrency]=useState("INR")
  const [covertedamount,setconvertamount]=useState(0)
  const[initialexhange,setexchange]=useState(0)


  function handlechange(e){
    const value=parseFloat(e.target.value)
    setamount(isNaN(value) ? 0 : value)
  }
  function handlefromchange(e){
    setfromcurrency(e.target.value)
  }
  function handletochange(e){
    settocurrency(e.target.value)
  }

  useEffect(()=>{
    const getexchangerate=async ()=>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const res=await axios.get(url)
        console.log(res)
        setexchange(res.data.rates[tocurrency])
      }catch(error){
        console.error(error)
      }finally{
        
      }
    }
    getexchangerate()
  },[fromcurrency,tocurrency])
  useEffect(()=>{
    if(initialexhange!==null){
       setconvertamount(Amount*initialexhange.toFixed(2))
    }
  },[Amount,initialexhange])
  return (
    <>
      <div className="container">
        <div className="image">
        </div>
        <h1>Curency Convertor</h1>
        <div className="amount">
          <label htmlFor="money" className='mnytext'>Enter The Amount</label>
          <input type="text" name="" className='mnyinp' placeholder='Enter the amount' value={Amount} onChange={handlechange}/>
        </div>
        <div className="fcurrency">
          <label htmlFor="crinp" className='crtxt'>From Currency</label>
          <select name="" id="" className='crinp' value={fromcurrency} onChange={handlefromchange}>
            <option value="USD">USD-United States Dollar</option>
            <option value="EUR">EUR-euro</option>
            <option value="GBP">GBP-British Pound Sterling</option>
            <option value="JPY">JPY-Japanese yen</option>
            <option value="AUD">AUD-Australian Dollar</option>
            <option value="CAD">CAD-Canadian Dollar</option>
            <option value="CNY">CNY-Chinese Yuvan</option>
            <option value="INR">INR-Indian Rupee</option>
            <option value="BRI">BRl-Brazilian Real</option>
            <option value="ZAR">ZAR-South Africal Rand</option>
          </select>
        </div>
        <div className="tcurrency">
          <label htmlFor="coninpt" className='crtxt'>From Currency</label>
          <select name="" id="" className='coninpt' value={tocurrency} onChange={handletochange}>
            <option value="USD">USD-United States Dollar</option>
            <option value="EUR">EUR-euro</option>
            <option value="GBP">GBP-British Pound Sterling</option>
            <option value="JPY">JPY-Japanese yen</option>
            <option value="AUD">AUD-Australian Dollar</option>
            <option value="CAD">CAD-Canadian Dollar</option>
            <option value="CBY">CNY-Chinese Yuvan</option>
            <option value="INR">INR-Indian Rupee</option>
            <option value="BRI">BRl-Brazilian Real</option>
            <option value="ZAR">ZAR-South Africal Rand</option>
          </select>
        </div>
        <div className='output'>{Amount} {fromcurrency} is equal to {covertedamount} {tocurrency}</div>
      </div>
    </>
  )
}

export default App
