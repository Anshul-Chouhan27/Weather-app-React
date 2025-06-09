//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./search.css"
import { useState } from 'react';

export default function Search({update}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false)

    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="a5aa26caf043a1f71586ce24f32637ed"

    let handleApi=async()=>{
        try{
             let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        feels_like:jsonResponse.main.feels_like,
        description:jsonResponse.weather[0].description
       }
       console.log(result);
       return result;
        }catch(err){
            console.log(err);
           throw err;
        }
     
    }

    let handleval=(event)=>{
        //  let v=event.target.value;
        setcity(event.target.value);
        // console.log(v);
    }

    let handlesubmit=async(event)=>{
        try{
            event.preventDefault();
         console.log(city);
         setcity("");
         let newInfo= await handleApi();
         update(newInfo);
         seterror(false);
        // eslint-disable-next-line no-unused-vars
        }catch(err){
            seterror(true);
        }
         
    }
    return(
        <div className='search'>
            <form onSubmit={handlesubmit}>
               <TextField 
               id="City name" 
               label="City" 
               variant="outlined" 
               required 
               value={city}
               onChange={handleval}/>
               <br /><br />
               <Button variant="contained" type='submit' >Search</Button>
               {error && <p style={{color:"red"}}>No such place found</p>}
            </form>
        </div>
    )
}