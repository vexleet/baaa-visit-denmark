import { Typography, Button } from '@mui/material';

const Breakfast = () => {
  return (
    <div>
    <Typography style={{fontSize:"2.3rem"}}>How would you like your breakfast?</Typography>

    <Button style={{backgroundColor:"white", color:"#022B52"}} variant="contained">I love early breakfast</Button>

    <Button style={{backgroundColor:"white", color:"#022B52"}} variant="contained">I prefer brunch</Button>

    <Typography>or</Typography>

    <Button style={{backgroundColor:"white", color:"#022B52"}} variant="contained">No breakfast</Button>
    </div>
  )
};

export default Breakfast;
