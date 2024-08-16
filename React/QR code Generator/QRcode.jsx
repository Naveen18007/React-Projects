import { useState } from 'react'

export const QRcode = () => {
  const [img,setimg]=useState("")
  const [loading,setloading]=useState(false)
  const [qrdata,setdata]=useState("")
  const[size,setsize]=useState("")
  function generate(){
    setloading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(qrdata)}`
      setimg(url)
    }catch(error){
        console.log(error)
    }finally{
      setloading(false);
    }
  }
  function Download(){
    fetch(img).then((Response)=>Response.blob()).then((blob)=>{
      const url=window.URL.createObjectURL(blob)
      const a=document.createElement("a")
      a.href=url
      a.download="qrcode.png"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    ).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='container'>
      <h1>QR Code Generator</h1>
      {loading && <p>Please wait...</p>}
      <img src={img} alt="" />
        <div>
            <label htmlFor="datainput" className='data'>Enter the URL</label>
            <input type="text" id="datainput" onChange={(e)=>setdata(e.target.value)}  />
            <label htmlFor="sizeinput" className='size'>Size of Qr code</label>
            <input type="text" id="sizeinput" onChange={(e)=>setsize(e.target.value)}/>
            <button onClick={generate} disabled={loading}>Generate</button>
            <button onClick={Download}>Download</button>
        </div>
    </div>
  )
}

