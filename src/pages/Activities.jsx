import { Box, Container, Typography } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';
import { useState } from 'react';
import styled from '@emotion/styled';
import PageLayout from '../layouts/PageLayout.jsx';

const ActivitiesContainer = styled(Container)`
  background: url(activities-bg.png) center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Activities = () => {
  const activitiesList = [
    {
      title: 'Art seeing',
      imgSrc: 'art-seeing.png'
    },
    {
      title: 'Aarhus on 2 wheels',
      imgSrc: 'aarhus-2-wheels.png'
    },
    {
      title: 'Outdoor',
      imgSrc: 'outdoor.png'
    },
    {
      title: 'Libraries',
      imgSrc: 'libraries.png'
    },
    {
      title: 'Theatre & Cinema',
      imgSrc: 'theatre.png'
    }
  ];

  const [selectedActivities, setSelectedActivities] = useState([]);

  const toggleSelectActivity = (index) => {
    const indexOfSelectedActivity = selectedActivities.indexOf(index);

    if (indexOfSelectedActivity === -1) {
      setSelectedActivities((prevState) => [...prevState, index]);
    } else {
      setSelectedActivities((prevState) => {
        const slicedState = prevState.slice();
        slicedState.splice(indexOfSelectedActivity, 1);
        return slicedState;
      });
    }
  };

  const cardIsSelected = (index) => {
    return selectedActivities.includes(index);
  };

  return (
    <PageLayout title="What activities would you like to experience?" image="activities-bg.png">
      <Typography variant="body1" my={2} color="#fff">
        {selectedActivities.length > 0 ? `${selectedActivities.length} selected` : <>&nbsp;</>}
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
        {activitiesList.map((activity, index) => (
          <Box key={index} onClick={() => toggleSelectActivity(index)}>
            <CardImage
              title={activity.title}
              img={activity.imgSrc}
              isSelected={cardIsSelected(index)}
            />
          </Box>
        ))}
      </Box>
    </PageLayout>
  );
};

export default Activities;
