import PageLayout from '../layouts/PageLayout.jsx';
import { Box, Button, Typography } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';
import { useNavigate } from 'react-router-dom';
import { usePreferencesContext } from '../context/PreferencesContext.jsx';
import { useEffect } from 'react';
import useSelectItems from '../hooks/useSelectItems.js';

const Lunch = () => {
  const navigate = useNavigate();
  const {
    updateActivePage,
    updatePreference,
    selectedPreferences: { lunch, dinner }
  } = usePreferencesContext();

  const { toggleSelectActivity, selectedItems, itemIsSelected, setSelectedItems } =
    useSelectItems();

    const { toggleSelectActivity: toggleLunch, selectedItems: dinnerItems, setSelectedItems: setDinnerItems } =
    useSelectItems();

    const { toggleSelectActivity: toggleDinner,selectedItems: lunchItems, setSelectedItems: setLunchItems } =
    useSelectItems();
  useEffect(() => {
    updateActivePage(2);
    setSelectedItems(lunch);
  }, []);

  useEffect(() => {
    updatePreference('lunch', selectedItems);
    updatePreference('dinner', selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    if ([...lunchItems, ...dinnerItems].length === 0) {
      setSelectedItems([])
    } else {
      setSelectedItems([...lunchItems, ...dinnerItems])
    }
  }, [dinnerItems, lunchItems]);

  const placesToEatList = [
    {
      title: 'Café',
      value: 'cafe',
      imgSrc: 'cafe.png'
    },
    {
      title: 'Restaurants',
      value: 'restaurants',
      imgSrc: 'restaurant.png'
    },
    {
      title: 'Local specialties',
      value: 'local',
      imgSrc: 'local.png'
    },
    {
      title: 'Night Life and Clubs',
      value: 'night-life',
      imgSrc: 'bars.png'
    }
  ];

  const handleNextPage = () => {
    updatePreference('lunch', selectedItems);
    navigate('/activities');
  };

  const handleNoLunch = () => {
    updatePreference('lunch', []);
    setLunchItems([]);
  };

  const handleNoDinner = () => {
    updatePreference('dinner', []);
    setDinnerItems([]);
  };
  return (
    <PageLayout
      title="What about lunch or dinner?"
      image="lunch-bg.png"
      onBackPage={() => navigate('/breakfast')}
      onNextPage={handleNextPage}>
      <>
        <Typography variant="body1" my={2} color="#fff">
          {selectedItems?.length > 0 ? `${selectedItems?.length} selected` : <>&nbsp;</>}
        </Typography>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
          {placesToEatList.map((place, index) => (
            <Box key={index} onClick={() => toggleSelectActivity(place.value)}>
              <CardImage
                title={place.title}
                img={place.imgSrc}
                isSelected={itemIsSelected(place.value)}
              />
            </Box>
          ))}
        </Box>
        <Box mt={3} display="flex" flexDirection="column" width={180} mx="auto">
          <Button  style={{
          backgroundColor: lunch.length === 0 ? '#e70013' : 'white',
          color: lunch.length === 0 ? 'white' : 'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '1.5rem'
        }} onClick={handleNoLunch} variant="contained" color="white">
            No Lunch
          </Button>
          <Box my={1}></Box>
          <Button style={{
          backgroundColor: dinner.length === 0 ? '#e70013' : 'white',
          color: dinner.length === 0 ? 'white' : 'black',
          alignContent: 'center',
          alignSelf: 'center',
          width: '17rem',
          height: '4rem',
          marginTop: '1.5rem'
        }} onClick={handleNoDinner} variant="contained" color="white">
            No Dinner
          </Button>
        </Box>
      </>
    </PageLayout>
  );
};

export default Lunch;
