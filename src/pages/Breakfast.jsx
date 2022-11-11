import { Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import PageLayout from '../layouts/PageLayout.jsx';

export default function Breakfast() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <PageLayout title="How would you like your breakfast?" image="breakfast-bg.png">
      <Button
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? '#e70013' : 'white',
          color: isActive ? 'white' : 'black',
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
          color: isActive ? 'white' : 'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '1.5rem'
        }}>
        I prefer brunch
      </Button>

      <Typography
        style={{ alignContent: 'center', alignSelf: 'center', marginTop: '1rem', color: 'white' }}>
        or
      </Typography>

      <Button
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? '#e70013' : 'white',
          color: isActive ? 'white' : 'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '1rem'
        }}>
        No breakfast
      </Button>
    </PageLayout>
  );
}
