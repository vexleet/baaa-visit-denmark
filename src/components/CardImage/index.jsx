import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';

const AbsoluteImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;

const CardImageWrapper = styled(Box)`
  &:after {
    content: '';
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.2) 90%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 4px;
    overflow: hidden;
  }
`;

const CheckedIcon = styled(CheckCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
`;

const CardImage = ({ title, img, isSelected = false }) => {
  return (
    <CardImageWrapper
      display="flex"
      alignItems="flex-end"
      position="relative"
      width={"100%"}
      height={160}>
      <AbsoluteImg src={img} />
      {isSelected && <CheckedIcon color="#fff" fontSize="large" />}

      <Typography textAlign="left" margin={1} variant="body1" color="#fff" zIndex={1}>
        {title}
      </Typography>
    </CardImageWrapper>
  );
};

export default CardImage;
