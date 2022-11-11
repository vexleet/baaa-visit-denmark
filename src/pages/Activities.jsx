import { Box, Container, Typography } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';
import { useState } from 'react';

const Activities = () => {
  const activitiesList = [
    {
      title: 'Art seeing',
      imgSrc:
        'https://files.guidedanmark.org/files/484/176379_Juleshopping-i-Latinerkvarteret-i-Aarhus.jpg'
    },
    {
      title: 'Aarhus on 2 wheels',
      imgSrc:
        'https://files.guidedanmark.org/files/484/176379_Juleshopping-i-Latinerkvarteret-i-Aarhus.jpg'
    },
    {
      title: 'Art seeing',
      imgSrc:
        'https://files.guidedanmark.org/files/484/176379_Juleshopping-i-Latinerkvarteret-i-Aarhus.jpg'
    },
    {
      title: 'Art seeing',
      imgSrc:
        'https://files.guidedanmark.org/files/484/176379_Juleshopping-i-Latinerkvarteret-i-Aarhus.jpg'
    },
    {
      title: 'Art seeing',
      imgSrc:
        'https://files.guidedanmark.org/files/484/176379_Juleshopping-i-Latinerkvarteret-i-Aarhus.jpg'
    }
  ];

  const [selectedActivities, setSelectedActivities] = useState([]);

  const toggleSelectActivity = (index) => {
    const indexOfSelectedActivity = selectedActivities.indexOf(index);

    if (!indexOfSelectedActivity) {
      setSelectedActivities((prevState) => [...prevState, index]);
    } else {
    }
  };

  return (
    <Container>
      <Typography variant="h6" textAlign="center" mb={2}>
        What activities would you like to experience?
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
        {activitiesList.map((activity, index) => (
          <Box key={index}>
            <CardImage title={activity.title} img={activity.imgSrc} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Activities;
