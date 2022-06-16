import React from 'react';
import { styled, Typography } from '@mui/material';

const Classic = () => {
  return (
    <Paper
      sx={{
        background: 'black',
        backgroundSize: 'cover',
      }}
    >
      <MapWrapper></MapWrapper>
      <TextWrapper>
        <StyledEditorTitle>Test headline</StyledEditorTitle>
      </TextWrapper>
      <BottomTextWrapper>
        <StyledBottomText>Test 1st row</StyledBottomText>
        <StyledBottomText>Tst 2nd Row</StyledBottomText>
      </BottomTextWrapper>
    </Paper>
  );
};

export default Classic;

const Paper = styled('div')(({ theme: $ }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  width: '500px',
  height: '700px',
  flexDirection: 'column',
  margin: $.spacing(2),
  [$.breakpoints.down('md')]: {
    width: '300px',
    height: '420px',
    margin: '10px',
  },
}));

const MapWrapper = styled('div')(({ theme: $ }) => ({
  position: 'relative',
  bottom: '12%',
  margin: '6%',
  [$.breakpoints.down('md')]: {
    top: '12%',
  },
}));

const TextWrapper = styled('div')(({ theme: $ }) => ({
  color: "white",
  width: '430px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '20%',
  left: '30%',
  transform: 'translate(-50%, 0)',
  [$.breakpoints.up('lg')]: {
    marginLeft: '-200px',
  },
  [$.breakpoints.down('md')]: {
    width: '230px',
  },
}));

const BottomTextWrapper = styled('div')(({ theme: $ }) => ({
  color: 'white',
  width: '430px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '12%',
  left: '30%',
  transform: 'translate(-50%, 0)',
  [$.breakpoints.up('lg')]: {
    marginLeft: '-200px',
  },
  [$.breakpoints.down('md')]: {
    width: '230px',
  },
}));

const StyledEditorTitle = styled(Typography)(({ theme: $ }) => ({
  fontSize: 28,
  lineHeight: 1.2,
  [$.breakpoints.down('md')]: {
    fontSize: 15,
  },
}));

const StyledBottomText = styled(Typography)(({ theme: $ }) => ({
  fontSize: 17,
  lineHeight: 1.2,
  [$.breakpoints.down('md')]: {
    fontSize: 9,
  },
}));
