import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { usePreferencesContext } from '../context/PreferencesContext';
import placesToEat from '../assets/data/categories/placesToEat.json'
import activities from '../assets/data/categories/activities.json'

export default function Plan() {
  const {
    selectedPreferences
  } = usePreferencesContext();
  const lunch = React.useMemo(() => placesToEat.find(place => place.Descriptions.find(desc => desc.Text.includes('lunch'))), [selectedPreferences.lunch])
  const breakfast = React.useMemo(() => placesToEat.find(place => place.Descriptions.find(desc => desc.Text.includes('breakfast'))), [selectedPreferences.breakfast])
  const activity = React.useMemo(() => activities.find(act => act.Id === 603781))
  1077566
  React.useEffect(() => {
    console.log(lunch)
    console.log(breakfast)
    console.log(activity)
  }, [lunch,breakfast, activity])
  return (
    <Box sx={{ maxWidth: 400, textAlign: "left" }}>
        <Typography mb="0.8rem" variant='h1' fontSize="2rem">Your plan for today!</Typography>
      <Stepper orientation="vertical">
        <Step active key={breakfast.Id} sx={{mr: '3rem'}}>
          <StepLabel
          >
            {breakfast.Name} Breakfast
          </StepLabel>
          <StepContent>
              <img
                  height="140"
                  width="120"
                  component="img"
                  src={breakfast?.Files[0]?.Uri}
              />
            <Typography fontFamily="VisitDenmarkBold">{breakfast.Name} Breakfast</Typography>
            <Typography fontSize="0.8rem" dangerouslySetInnerHTML={{__html: breakfast.Descriptions[0].Html}} />
          </StepContent>
        </Step>
        <Step active key={lunch.Id} sx={{mr: '3rem'}}>
          <StepLabel
          >
            {lunch.Name} Lunch
          </StepLabel>
          <StepContent>
              <img
                  height="120"
                  width="120"
                  component="img"
                  src={lunch?.Files[0]?.Uri}
              />
            <Typography fontFamily="VisitDenmarkBold">{lunch.Name} lunch</Typography>
            <Typography fontSize="0.8rem" dangerouslySetInnerHTML={{__html: lunch.Descriptions[0].Html}} />
          </StepContent>
        </Step>
        <Step active key={activity.Id} sx={{mr: '3rem'}}>
          <StepLabel
          >
            {activity.Name}
          </StepLabel>
          <StepContent>
              <img
                  height="120"
                  width="120"
                  component="img"
                  src={activity?.Files[0]?.Uri}
              />
            <Typography fontFamily="VisitDenmarkBold">{activity.Name} Activity</Typography>
            <Typography fontSize="0.8rem" dangerouslySetInnerHTML={{__html: activity.Descriptions[0].Html}} />
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
