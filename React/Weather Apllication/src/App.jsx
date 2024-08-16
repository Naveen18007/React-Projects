import { useState } from 'react'
import './App.css'
import searchh from './assets/search.png'
import wind from './assets/wind.png'
import rain from './assets/rain.gif'
import snow from './assets/snow.png'
import cloud from './assets/cloud.png'
import sun from './assets/sun.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/Humidity.png'
import { useEffect } from 'react'

function App() {
  let apikey='aa50172c98eba46ca4b93a50a35e5b3b'
  const[text,ftext]=useState("London")
  const [icon,final]=useState(sun)
  const[ideg,fidig]=useState(0)
  const[icity,fcity]=useState("London")
  const[icountry,fcountry]=useState('GB')
  const[ilogs,flogs]=useState()
  const[ilat,flat]=useState()
  const[iwind,fwind]=useState(0)
  const[ihumidity,fhumidity]=useState(0)
  const[loading,setloading]=useState(false)
  const[citynotfound,setcitynotfound]=useState(false)
  const[error,seterror]=useState(null)

  const weatherIconMap={
    "01d":sun,
    "01n":sun,
    "02d":cloud,
    "02n":cloud,
    "03d":drizzle,
    "03n":drizzle,
    "04d":drizzle,
    "04n":drizzle,
    "09d":rain,
    "09n":rain,
    "10d":rain,
    "10n":rain,
    "13d":snow,
    "13n":snow
  }

  
  const handleweather=(e)=>{
    ftext(e.target.value)
 }
 const searchweather=(e)=>{
  if(e.key=="Enter"){
    search();
  }
 }
 useEffect(function(){
  search()
},[])

  const search =async ()=>{
    setloading(true)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=Metric`
    
    try{
      let res=await fetch(url);
      let data=await res.json()
      if(data.cod==="404"){
        console.error("An Error Occured")
        setcitynotfound(true)
        setloading(false)
        return;
      }
      fcity(data.name)
      flogs(data.coord.lon)
      flat(data.coord.lat)
      fidig(data.main.temp)
      fwind(data.wind.speed)
      fhumidity(data.main.humidity)
      fcountry(data.sys.country)
      const weathercode=data.weather[0].icon;
      setcitynotfound(false)
      final(weatherIconMap[weathercode]|| sun)

    }catch(error){
      console.log(error)
      seterror("An Error Occured While Loading The Weather")
    }finally{
      setloading(false)
    }
  }
  function  Weather({icon,ideg,icity,icountry,ilogs,iflat}){
    return(
      <>
      <div className='image'>
        <img src={icon} alt="weather" />
        </div>
      <div className='degree'>{ideg}°C</div>
      <div className='city'>{icity}</div>
      <div className='country'>{icountry}</div>
      <div className='cords'>
        <span>Lattitude:{ilat}</span>
        <span>Longitude:{ilogs}</span>
      </div>
      <div className='WeatherContainer'>
        <div className='HumidityContainer'>
          <img src={humidity} alt="" className='himg'/>
        <div className='Humidity'>
          <div className='h1'>{ihumidity}%</div>
          <div className='h2'>Humidity</div>
         </div>
        </div>
       <div className='Windcontainer'>
          <img src={wind} alt="" className='wimg'/>
        <div className='WindContainer'>
          <div className='w1'>{iwind}km/hr</div>
          <div className='w2'>Wind Speed</div>
        </div>
       </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className='container'>
        <div className='inputcont'>
          <input type="text" name="" id="" placeholder='Enter the City' className='searchinp' onChange={handleweather} onKeyDown={searchweather}value={text}/>
          <div className='searchicon'>          
            <img src={searchh} alt="" onClick={search}/>
           </div>
           </div>
           {loading && <div className='Loading'>Loading...</div>}
           {error && <div className='error'>{error}</div>}
           {citynotfound && <div className='citynot'>City Not Found</div>}
           {!loading && !citynotfound && !error &&<Weather icon={icon} ideg={ideg} icity={icity} icountry={icountry} iwind={iwind} ihumidity={ihumidity} ilogs={ilogs} ilat={ilat}/>}
      </div>
      
    </>
  )
}

export default App
