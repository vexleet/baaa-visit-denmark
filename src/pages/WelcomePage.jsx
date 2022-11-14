import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { usePreferencesContext } from '../context/PreferencesContext.jsx';

const WelcomePage = () => {
  const { resetPreferences } = usePreferencesContext();

  useEffect(() => {
    resetPreferences();
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(welcome-bg.png)',
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <img
        src={`logo.svg`}
        alt="visitDenmark logo"
        style={{ width: '250px', height: '250px', marginTop: '-50px' }}></img>
      <div style={{ marginTop: '2rem' }}>
        <Typography style={{ fontSize: '2.3rem', color: 'white' }}>Welcome!</Typography>
        <Typography style={{ fontSize: '1.2rem', padding: '20px', color: 'white' }}>
          Denmark has everything you love; beautiful nature, exciting culture and wild activities.
          Denmark has it all - the hard part is choosing what to experience. <br></br> <br></br>Plan
          out your day in Aarhurs here!
        </Typography>
      </div>

      <Link to="/breakfast">
        <Button
            style={{
              backgroundColor: '#e70013',
              color: 'white',
              alignContent: 'center',
              alignSelf: 'center',
              width: '17rem',
              height: '4rem',
              marginTop: '1.5rem'
            }}
          variant="contained">
          Plan your day
        </Button>
      </Link>
    </div>
  );
};
export default WelcomePage;
