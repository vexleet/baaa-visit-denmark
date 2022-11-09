import { Typography, Button } from '@mui/material';

const Breakfast = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
    <Typography style={{fontSize:"1.5rem", marginTop:"-10rem", padding:"3rem"}}>How would you like your breakfast?</Typography>

    <Button style={{alignContent:"center", alignSelf:"center", backgroundColor:"white", color:"#022B52", width:"17rem", height:"4rem", marginTop:"2rem"}} variant="contained">I love early breakfast</Button>

    <Button style={{alignContent:"center", alignSelf:"center",backgroundColor:"white", color:"#022B52", width:"17rem", height:"4rem", marginTop:"1.5rem"}} variant="contained">I prefer brunch</Button>

    <Typography style={{alignContent:"center", alignSelf:"center", marginTop:"1rem"}}>or</Typography>

    <Button style={{alignContent:"center", alignSelf:"center", backgroundColor:"white", color:"#022B52", width:"17rem", height:"4rem"}} variant="contained">No breakfast</Button>
    
    <Button>Next</Button>
    </div>
  )
};

export default Breakfast;
