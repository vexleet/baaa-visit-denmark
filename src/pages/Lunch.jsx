import PageLayout from '../layouts/PageLayout.jsx';
import { Box, Button } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';

const Lunch = () => {
  const placesToEatList = [
    {
      title: 'Café',
      imgSrc: 'art-seeing.png'
    },
    {
      title: 'Restaurants',
      imgSrc: 'aarhus-2-wheels.png'
    },
    {
      title: 'Local specialties',
      imgSrc: 'outdoor.png'
    },
    {
      title: 'Night Life and Clubs',
      imgSrc: 'libraries.png'
    }
  ];

  return (
    <PageLayout title="What about lunch or dinner?" image="lunch-bg.png">
      <>
        <Box mt={10} display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
          {placesToEatList.map((place, index) => (
            <Box key={index}>
              <CardImage title={place.title} img={place.imgSrc} />
            </Box>
          ))}
        </Box>
        <Box mt={3} display="flex" flexDirection="column" width={180} mx="auto">
          <Button variant="contained" color="white">
            No Lunch
          </Button>
          <Box my={1}></Box>
          <Button variant="contained" color="white">
            No Dinner
          </Button>
        </Box>
      </>
    </PageLayout>
  );
};

export default Lunch;
