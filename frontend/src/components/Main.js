import * as React from 'react';
import { Container } from '@mui/material';
import TopBanner from './TopBanner';
import BottomContent from './BottomContent';

export default function Main({ isPopUpOpen, setPopUpState, userId }) {
  return (
    <Container
      id="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingTop: '3%',
        background: '#E9E9E9',
        marginTop: '64px',
        width: '100% !important',
        maxWidth: '100% !important',
      }}
    >
      <Container sx={{
        maxWidth: '720px !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      >
        <TopBanner />
        <BottomContent isPopUpOpen={isPopUpOpen} setPopUpState={setPopUpState} userId={userId} />
      </Container>

    </Container>
  );
}
