import React from 'react';
import { styled, Typography } from '@mui/material';

const Classic = () => {
  return (
    <PaperContainer
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
    </PaperContainer>
  );
};

export default Classic;

const PaperContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-direction: column;
  width: 500px;
  height: 700px;
  position: relative;

  @media print {
    width: 100% !important;
    height: 100vh !important;
    margin: unset !important;
  }

  ${({ theme }) => `
    margin: ${theme.spacing(2)};
    ${theme.breakpoints.down('md')} {
      width: 300px;
      height: 420px;
      margin: 10px;
    }
  `}
`;

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
  left: '50%',
  transform: 'translate(-50%, 0)',
  // [$.breakpoints.up('lg')]: {
  //   marginLeft: '-200px',
  // },
  // [$.breakpoints.down('md')]: {
  //   width: '230px',
  // },
}));

const BottomTextWrapper = styled('div')(({ theme: $ }) => ({
  color: 'white',
  width: '430px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '12%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  // [$.breakpoints.up('lg')]: {
  //   marginLeft: '-200px',
  // },
  // [$.breakpoints.down('md')]: {
  //   width: '230px',
  // },
}));

// const StyledEditorTitle = styled(Typography)(({ theme: $ }) => ({
//   fontSize: 28,
//   lineHeight: 1.2,
//   [$.breakpoints.down('md')]: {
//     fontSize: 15,
//   },
// }));

// const StyledBottomText = styled(Typography)(({ theme: $ }) => ({
//   fontSize: 17,
//   lineHeight: 1.2,
//   [$.breakpoints.down('md')]: {
//     fontSize: 9,
//   },
// }));

const StyledEditorTitle = styled(Typography)`
  font-size: 28px;
  line-height: 1.2;

  @media print {
    font-size: 3rem;
  }
`;

const StyledBottomText = styled(Typography)`
  font-size: 17px;
  line-height: 1.2;

  @media print {
    font-size: 1.3rem;
  }
`;
