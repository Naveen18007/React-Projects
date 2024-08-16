import { useEffect, useState } from 'react'
import './App.css'
import questiondata from "./question.json"

function App() {
  const [current,setcurrent]=useState(0)
  const [score,setscore]=useState(0)
  const [show,setshow]=useState(false)
  const [timer,settimer]=useState(10)
  const handleanswer=(selectedoption)=>{
    if(questiondata[current].Correctoption===selectedoption){
      setscore((score)=>score+1)
    }
    if(current<questiondata.length-1){
      setcurrent((current)=>current+1)
      settimer(10)
    }
    else{
      setshow(true)
    }
  }
  const restart=()=>{
    setcurrent(0)
    setscore(0)
    setshow(false)
    settimer(10)
  }
  useEffect(()=>{
    let interval;
    if(timer>0 && !show){
      interval=setInterval(()=>{
        settimer((timer)=>timer-1)
      },1000)
    }
    else{
      clearInterval(interval)
      setshow(true)
    }
    return ()=>clearInterval(interval)
  },[timer,show])
  return (
    <>
      <div className="quizapp">
        {show ? (
          <div className='scoresection'>
          <h1>Your Score is:{score}/{questiondata.length}</h1>
          <button className='nextbtn' onClick={restart}>Restart</button>
        </div>
        ):(
          <div className="question">
          <h1>Question-{current+1}</h1>
          <p>{questiondata[current].Question}</p>
            <div className="btns">
              {questiondata[current].Options.map((option,index)=>(
                <button key={index} onClick={()=>{
                  handleanswer(option)
                }}>{option}</button>
              ))}
            </div>
            <div className="time">Time Left:
              <span>{timer}s</span>
            </div>
          </div>
        )}
        
      </div>
    </>
  )
}

export default App
