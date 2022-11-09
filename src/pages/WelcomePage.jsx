import { Typography, Button } from '@mui/material';

const WelcomePage = () => {
  return (
    <>
  <img
        src={`logo.svg`}
        alt="visitDenmark logo"
        style={{width:"350px", height:"350px", marginTop:"-12rem"}}
  ></img>
  <div>
    <Typography style={{ fontSize:"2.3rem"}}>Welcome!</Typography>
    <Typography style={{ fontSize:"1.2rem", padding:"20px"}}>Denmark has everything you love; beautiful nature, exciting culture and wild activities. Denmark has it all 
    - the hard part is choosing what to experience. Plan out your day in Aarhurs here!
    </Typography>
  </div>

  <Button style={{marginTop:"4rem", backgroundColor:"#E70013", color:"white"}} variant="contained">Plan your day</Button>

    </>

  )};
export default WelcomePage;



