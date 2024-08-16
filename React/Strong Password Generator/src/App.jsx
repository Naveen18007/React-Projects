import { useState } from 'react'
import './App.css'

function App() {
const [length,setlength]=useState(8)
const [includeupper,setincludeupper]=useState(true)
const [includeLower,setincludeLower]=useState(true)
const [includeNumber,setincludeNumber]=useState(true)
const [includeSymbol,setincludeSymbol]=useState(true)
const [password,setpassword]=useState("")

const generatepass=()=>{
  var charset=""
  if(includeupper){
    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(includeLower){
    charset+="abcdefghijklmnopqrstuvwxyz"
  }
  if(includeNumber){
    charset+="0123456789"
  }
  if(includeSymbol){
    charset+="!@#$%^&*()"
  }
  var generatedpassword="";
  if(charset==""){
    generatedpassword+="Please Select Atleast One";
  }
  else{
  for(var i=0;i<length;i++){
    const randomindex=Math.floor(Math.random()*charset.length)
    generatedpassword+=charset[randomindex]
  }
}
setpassword(generatedpassword)
}
const copytoclip=()=>{
  navigator.clipboard.writeText(password)
  alert("Your password is Copied")
}
  return (
    <>
      <div className="container">
        <h1>Password Geneterator</h1>
        <div className="input">
          <label htmlFor="pass">Password Length</label>
          <input type="number" id="pass" value={length} onChange={(e)=>{
            setlength(e.target.value)
          }}/>
        </div>
        <div className='box'>
          <div className="inp1">
            <input type="checkbox" name="" className='upper' checked={includeupper} onChange={(e)=>{
              setincludeupper(e.target.checked)
            }}/>
            <label htmlFor="upper">Include Upper Case</label>
          </div>
          <div className="inp2">
          <input type="checkbox" name="" className='lower' checked={includeLower} onChange={(e)=>{
            setincludeLower(e.target.checked)
          }}/>
          <label htmlFor="lower">Include Lower Case</label>
          </div>
          <div className="inp3">
           <input type="checkbox" name="" className='number' checked={includeNumber} onChange={(e)=>{
            setincludeNumber(e.target.checked)
           }}/>
           <label htmlFor="number">Include Number</label>
          </div>
          <div className='inp4'>
          <input type="checkbox" name="" className='symbol' checked={includeSymbol} onChange={(e)=>{
            setincludeSymbol(e.target.checked)
          }}/>
          <label htmlFor="symbol">Include Symbol</label>
          </div>
        </div>
        <button className='btn'onClick={generatepass}>Generate Password</button>
        <div className="output" >
           <div className='gpass'>{password}</div>
          <button className='copy' onClick={copytoclip}>Copy</button>
        </div>
        <div></div>
      </div>
    </>
  )
}


export default App
