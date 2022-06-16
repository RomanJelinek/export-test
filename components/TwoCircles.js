import React from 'react';
import { styled, Typography } from '@mui/material';

const TwoCircles = () => {
  return (
    <Paper>
      <MapWrapper></MapWrapper>
      <ImgWrapper>
        <NoImage>Empty circle</NoImage>
      </ImgWrapper>
      <TextWrapper>
        <StyledEditorTitle>Test headlone</StyledEditorTitle>
      </TextWrapper>
      <BottomTextWrapper>
        <StyledBottomText>Test 1st row</StyledBottomText>
      </BottomTextWrapper>
    </Paper>
  );
};

export default TwoCircles;

const Paper = styled('div')(({ theme: $ }) => ({
  display: 'flex',
  backgroundColor: 'black',
  margin: $.spacing(6, 0),
  width: '700px',
  height: '500px',
  boxShadow: 'rgb(0, 0, 0) 0px 20px 30px -10px',
  [$.breakpoints.down('md')]: {
    width: '360px',
    height: '257px',
    margin: $.spacing(6, 0),
  },
}));

const MapWrapper = styled('div')(({ theme: $ }) => ({
  top: '22px',
  left: '38px',
  position: 'relative',
  width: '330px',
  [$.breakpoints.down('md')]: {
    width: '180px',
    top: '14px',
    left: '20px',
  },
}));

const ImgWrapper = styled('div')(({ theme: $ }) => ({}));

const Img = styled('img')(({ theme: $ }) => ({
  position: 'relative',
  top: '22px',
  right: '5px',
  border: '2px solid white',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  width: '310px',
  height: '310px',
  zIndex: 20,
  margin: '15px',
  [$.breakpoints.down('md')]: {
    width: '160px',
    height: '160px',
    top: '3px',
    right: '10px',
  },
}));

const NoImage = styled('div')(({ theme: $ }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: $.palette.background.default,
  position: 'relative',
  top: '22px',
  right: '5px',
  border: '2px solid white',
  borderRadius: '50%',
  width: '310px',
  height: '310px',
  zIndex: 20,
  margin: '15px',
  [$.breakpoints.down('md')]: {
    width: '160px',
    height: '160px',
    top: '3px',
    right: '10px',
  },
}));

const TextWrapper = styled('div')(({ theme: $ }) => ({
  textAlign: 'center',
  maxWidth: '540px',
  position: 'absolute',
  bottom: '135px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  [$.breakpoints.up('lg')]: {
    marginLeft: '-200px',
  },
  [$.breakpoints.down('md')]: {
    width: '250px',
    bottom: '90px',
  },
}));

const StyledEditorTitle = styled(Typography)(({ theme: $ }) => ({
  fontSize: 28,
  lineHeight: 1.2,
  [$.breakpoints.down('md')]: {
    fontSize: 13,
  },
}));

const BottomTextWrapper = styled('div')(({ theme: $ }) => ({
  width: '430px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '11%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  [$.breakpoints.up('lg')]: {
    marginLeft: '-200px',
  },
  [$.breakpoints.down('md')]: {
    width: '230px',
    bottom: '16%',
  },
}));

const StyledBottomText = styled(Typography)(({ theme: $ }) => ({
  fontSize: 15,
  lineHeight: 1.2,
  [$.breakpoints.down('md')]: {
    fontSize: 8,
  },
}));
