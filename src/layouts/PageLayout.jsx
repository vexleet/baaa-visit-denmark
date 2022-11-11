import { Box, Button, Container, Typography } from '@mui/material';
import CardImage from '../components/CardImage/index.jsx';
import styled from '@emotion/styled';

const PageLayoutContainer = styled(Container)((props) => ({
  background: `url(${props.image}) center no-repeat;`,
  backgroundSize: 'cover',
  height: '100vh',
  width: '100%'
}));

const NextButton = styled(Button)`
  margin-top: auto;
  font-size: 25px;
`;

const PageLayout = ({ children, title, image, onNextPage, onBackPage }) => {
  return (
    <PageLayoutContainer image={image}>
      <Box pt={3} pb={5} display="flex" flexDirection="column" height="-webkit-fill-available">
        <Box pb={9} display="flex" justifyContent="space-between">
          <Typography variant="body1" onClick={onBackPage} color="#fff">
            Back
          </Typography>
          <Typography variant="body1" color="#fff">
            3/5
          </Typography>
          <Typography variant="body1" onClick={onNextPage} color="#fff">
            Skip
          </Typography>
        </Box>
        <Typography variant="h5" textAlign="center" color="#fff">
          {title}
        </Typography>
        {children}
        <NextButton variant="text" color="white" size="large" onClick={onNextPage}>
          Next
        </NextButton>
      </Box>
    </PageLayoutContainer>
  );
};

export default PageLayout;
