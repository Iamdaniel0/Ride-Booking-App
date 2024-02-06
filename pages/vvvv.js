import classes from './weather.module.css'
import { useRef, useState } from 'react'
import Destination from './api/data/destination'
//import axios from 'axios'

function Weather (){

    const cityInputRef = useRef()
    const[countryCode, setCountryCode] = useState('')
    const[main, setMain] = useState('')
    const[desc, setDesc] = useState('')
    const[temp, setTemp] = useState('')
    const[errmsg, setErrmsg] = useState('')
    const[dstyle, setDstyle] = useState({})
    const[s, setS] = useState({})
    
    
    function submitHandler(e){
        e.preventDefault()

    const enteredCity = cityInputRef.current.value
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=d555f7137ddd35c6f20e8c712fcf1cf1`)
    .then((res)=>{
        console.log(res)
        if(res.ok){
            setDstyle({display: 'block'})
            setS({display: 'none'})
            setErrmsg('Valid Input') 
        }
        else{
            
            setErrmsg('Invalid Input') 
            setDstyle({display: 'none'})
            setS({display: 'block'})
        }
        return res.json()
    })
    .then(data=>(setCountryCode(data.sys.country), setMain(data.weather[0].main), setDesc(data.weather[0].description), setTemp(data.main.temp) ,console.log(data)))
     .catch((err)=>{
        // setErrmsg('Invalid Input')
    })
     
    
    
   
    }

    return(
        <div className={classes.card}>
            <p>{errmsg}</p>
            <div className={classes.minfo}>
            <div style={dstyle} className={classes.info}>
                <h3>Country</h3>
                <hr/>
                <h4>{countryCode}</h4>
            </div>
            <div style={dstyle} className={classes.info}>
                <h3>Weather and Description</h3>
                <hr/>
                <h4>{main}</h4>
                <p>{desc}</p>
            </div>
            <div style={dstyle} className={classes.info}>
                <h3>Temperature</h3>
                <hr/>
                <h4>{(temp-273.150).toFixed(2)} C</h4>
            </div>
            </div>
            <form onSubmit={submitHandler}>
            <label htmlFor='city' style={s}>Enter City</label>
                <div className={classes.formControl}>
                   
                    <input
                    id='city'
                    name='city'
                    ref={cityInputRef}
                    >

                    </input>


                </div>
                <div className={classes.formControl}>
                    <button type="submit">Submit</button>
                </div>
            
                
            </form>
        </div>
    )
}

export default Weather