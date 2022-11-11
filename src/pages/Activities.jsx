import { Box, Container, Typography } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PageLayout from '../layouts/PageLayout.jsx';
import useSelectItems from '../hooks/useSelectItems.js';
import { useNavigate } from 'react-router-dom';
import { usePreferencesContext } from '../context/PreferencesContext.jsx';

const ActivitiesContainer = styled(Container)`
  background: url(activities-bg.png) center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Activities = () => {
  const navigate = useNavigate();
  const {
    updateActivePage,
    updatePreference,
    selectedPreferences: { activities }
  } = usePreferencesContext();

  const { toggleSelectActivity, selectedItems, itemIsSelected, setSelectedItems } =
    useSelectItems();

  useEffect(() => {
    updateActivePage(3);
    setSelectedItems(activities);
  }, []);

  const activitiesList = [
    {
      title: 'Art seeing',
      value: 'art-seeing',
      imgSrc: 'art-seeing.png'
    },
    {
      title: 'Aarhus on 2 wheels',
      value: 'bike',
      imgSrc: 'aarhus-2-wheels.png'
    },
    {
      title: 'Outdoor',
      value: 'outdoor',
      imgSrc: 'outdoor.png'
    },
    {
      title: 'Libraries',
      value: 'libraries',
      imgSrc: 'libraries.png'
    },
    {
      title: 'Theatre & Cinema',
      value: 'theatre',
      imgSrc: 'theatre.png'
    }
  ];

  const handleNextPage = () => {
    updatePreference('activities', selectedItems);
    navigate('/plan');
  };

  return (
    <PageLayout
      title="What activities would you like to experience?"
      image="activities-bg.png"
      onNextPage={handleNextPage}
      onBackPage={() => navigate('/lunch')}>
      <Typography variant="body1" my={2} color="#fff">
        {selectedItems.length > 0 ? `${selectedItems.length} selected` : <>&nbsp;</>}
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
        {activitiesList.map((activity, index) => (
          <Box key={index} onClick={() => toggleSelectActivity(activity.value)}>
            <CardImage
              title={activity.title}
              img={activity.imgSrc}
              isSelected={itemIsSelected(activity.value)}
            />
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
};

export default Activities;
