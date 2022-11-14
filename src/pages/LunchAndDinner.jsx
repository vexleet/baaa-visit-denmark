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
    selectedPreferences: { lunch }
  } = usePreferencesContext();
  
  const { toggleSelectActivity, selectedItems, itemIsSelected, setSelectedItems } =
    useSelectItems();

  useEffect(() => {
    updateActivePage(2);
    setSelectedItems(lunch);
  }, []);

  useEffect(() => {
    updatePreference('lunch', selectedItems);
    updatePreference('dinner', selectedItems);
  }, [selectedItems]);

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

  const handleClear = () => {
    updatePreference('lunch', []);
    updatePreference('dinner', []);
    setSelectedItems([])
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
        }} onClick={handleClear} variant="contained" color="white">
            No Lunch & Dinner
          </Button>
          <Box my={1}></Box>
        </Box>
      </>
    </PageLayout>
  );
};

export default Lunch;
