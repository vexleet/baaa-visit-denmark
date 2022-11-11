import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const AbsoluteImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const CardImageWrapper = styled(Box)`
  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 4px;
    overflow: hidden;
  }
`;

const CardImage = ({ title, img }) => {
  return (
    <CardImageWrapper
      display="flex"
      alignItems="flex-end"
      position="relative"
      width={170}
      height={125}>
      <AbsoluteImg src={img} />
      <Typography textAlign="left" margin={1} variant="body1" color="white">
        {title}
      </Typography>
    </CardImageWrapper>
  );
};

export default CardImage;
