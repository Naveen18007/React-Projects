import { useState } from 'react'
import './App.css'

function App() {
  const [height,setheight]=useState()
  const [weight,setweight]=useState()
  const [bmi,setbmi]=useState(null)
  const [result,setresult]=useState("")
  const [error ,seterrormsg]=useState("")

  function calculatebmi(){
    const isvalidheight=/^\d+$/.test(height);
    const isvalidweight=/^\d+$/.test(weight);
    if(isvalidheight && isvalidweight){
      const heightinmeter=height/100;
      const bmii=weight/(heightinmeter*heightinmeter);
      setbmi(bmii.toFixed(2));
      if(bmi<18.5){
        setresult("Underweight")
      }
      else if(bmi>=18.5 && bmi<25){
        setresult("Normal")
      }
      else if(bmi>=25 && bmi<30){
        setresult("Overweight")
      }
      else{
        setresult("Obese")
      }
      seterrormsg("")
    }else{
      setbmi(null)
      setresult("")
      seterrormsg("Please enter valid height and weight")
    }
  }
  function clearall(){
    setbmi(null)
    setresult("")
    seterrormsg("")
    setheight("")
    setweight("")
  }

  return (
    <>
    <div className="container">
      <div className="image"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {error &&  <p className='error'>Please Enter a Valid Inputs</p>}
        <div className="heightinp">
          <label htmlFor="height">Height</label>
          <input type="text" id="height" placeholder="Enter your height" value={height} onChange={(e)=>{
            setheight(e.target.value)
          }}/>
        </div>
        <div className="weightinp">
          <label htmlFor="weight">Weight</label>
          <input type="text" id="weight" placeholder="Enter your weight" value={weight} onChange={(e)=>{
            setweight(e.target.value)
          }}/>
        </div>
        <div className='output'>
          <div className='buttons'>
          <button className='calculate' onClick={calculatebmi}>Calculate</button>
          <button className='clearbtn'onClick={clearall}>Clear</button>
          </div>
          {bmi !== null && (
            <div>
              <p className='output'>Your BMI Score is:{bmi}</p>
              <p className='status'>Status:{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
