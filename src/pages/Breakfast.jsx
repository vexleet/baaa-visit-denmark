import { Typography, Button, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PageLayout from '../layouts/PageLayout.jsx';
import { useNavigate } from 'react-router-dom';
import { usePreferencesContext } from '../context/PreferencesContext.jsx';

const breakfastTypes = {
  breakfast: 'breakfast',
  brunch: 'brunch',
  nothing: 'nothing'
};

export default function Breakfast() {
  const navigate = useNavigate();
  const {
    updatePreference,
    updateActivePage,
    selectedPreferences: { breakfast }
  } = usePreferencesContext();

  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    updateActivePage(1);
    setActiveItem(breakfast);
  }, []);

  const handleClick = (value) => {
    setActiveItem(value);
  };

  const handleNextPage = () => {
    updatePreference('breakfast', activeItem);
    navigate('/lunch');
  };

  return (
    <PageLayout
      title="How would you like your breakfast?"
      image="breakfast-bg.png"
      onNextPage={handleNextPage}
      onBackPage={() => navigate('/welcome-page')}>
      <Button
        onClick={() => handleClick(breakfastTypes.breakfast)}
        style={{
          backgroundColor: activeItem === breakfastTypes.breakfast ? '#e70013' : 'white',
          color: activeItem === breakfastTypes.breakfast ? 'white' : 'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '2rem'
        }}>
        I love early breakfast
      </Button>

      <Button
        onClick={() => handleClick(breakfastTypes.brunch)}
        style={{
          backgroundColor: activeItem === breakfastTypes.brunch ? '#e70013' : 'white',
          color: activeItem === breakfastTypes.brunch ? 'white' : 'black',
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
        onClick={() => handleClick(breakfastTypes.nothing)}
        style={{
          backgroundColor: activeItem === breakfastTypes.nothing ? '#e70013' : 'white',
          color: activeItem === breakfastTypes.nothing ? 'white' : 'black',
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
