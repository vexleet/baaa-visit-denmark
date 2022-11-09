import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    title: 'Breakfast',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    title: 'Amazing Pizza place',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    title: 'Fun activity',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function Plan() {

  return (
    <Box sx={{ maxWidth: 400, textAlign: "left" }}>
        <Typography mb="0.8rem" variant='h1' fontSize="2rem">Your plan for today!</Typography>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step active key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
                <img
                    height="120"
                    width="120"
                    component="img"
                    src="https://files.guidedanmark.org/files/484/484_282002.jpg"
                />
              <Typography fontFamily="VisitDenmarkBold">{step.title}</Typography>
              <Typography fontSize="0.8rem">{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
