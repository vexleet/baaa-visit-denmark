import { Typography, Button } from '@mui/material';
import React, { useState } from 'react';

export default function Breakfast() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', 
    backgroundImage: "url(breakfast-bg.png)",
    height: "100vh",
    width:"100%",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>

      <Typography style={{ fontSize: '1.5rem', marginTop: '-10rem', padding: '3rem' }}>
        How would you like your breakfast?
      </Typography>

      <Button
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? '#e70013' : 'white',
          color: isActive ? 'white' :'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '2rem'
        }}>
        I love early breakfast
      </Button>

      <Button
      onClick={handleClick}
        style={{
          backgroundColor: isActive ? '#e70013' : 'white',
          color: isActive ? 'white' :'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '1.5rem'
        }}>
        I prefer brunch
      </Button>

    <Typography style={{alignContent:"center", alignSelf:"center", marginTop:"1rem", color:"white"}}>or</Typography>

    <Button onClick={handleClick} style={{backgroundColor: isActive ? '#e70013' : 'white', color: isActive ? 'white' :'black', alignContent:"center", alignSelf:"center", width:"17rem", height:"4rem", marginTop:"1rem"}} >No breakfast</Button>
    
    <a href="/lunch"><Button style={{color:"#022B52",position: 'absolute', bottom:0, right:0, marginBottom:"3rem", marginRight:"5rem", color:"white"}}>Next</Button></a>

    </div>
  );
}

