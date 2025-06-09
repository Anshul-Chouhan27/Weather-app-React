import { useState } from "react";
import InfoBox from "./infobox";
import Search from "./search";
import "./WeatherApp.css";

export default function Weather(){
    let [weather,setweather]=useState({
        city:"indore",
        temp:32.41,
        temp_max:32.41,
        temp_min:32.41,
        humidity:35,
        feels_like:32,
        description:'haze',
    })

    let update=(result)=>{
        setweather(result);
    }
    return(
        <div className="weather">
            <h2>Weather App</h2>
            <Search update={update}/>
            <InfoBox info={weather}/>
        </div>
    )
}