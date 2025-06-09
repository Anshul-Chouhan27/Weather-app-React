import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css";

export default function InfoBox({info}){
     
    //let image="https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhemV8ZW58MHx8MHx8fDA%3D"
    
    let RAINY_URL="https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnl8ZW58MHx8MHx8fDA%3D"
    let COLD_URL="https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    let HOT_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3Vubnl8ZW58MHx8MHx8fDA%3D"
    
    return(
        <div className='infobox'> 
    
          <div className='info-container'>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity>80?
          RAINY_URL:
          info.temp>15?
          HOT_URL:COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80?
          <ThunderstormIcon/>:
          info.temp>15?
          <SunnyIcon/>:
          <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Tempreature = {info.temp}&deg;C</p>
         <p>Max Tempreature = {info.temp_max}</p>
         <p>Min Tempreature = {info.temp_min}</p>
         <p>Humidity = {info.humidity}</p>
         <p>The weather can be described as <i>{info.description}</i> and feels like {info.feels_like}</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    )
}