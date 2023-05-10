import React, { useState, useEffect } from 'react';
import {
  Box, Container, Grid,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NorthIcon from '@mui/icons-material/North';
import TokenIcon from '@mui/icons-material/Token';
import Questions from './Questions';
import Form from './Form';

const aboutStyle = {
  fontSize: '8px',
  display: 'flex',
  justifyContent: 'flex -start',
  alignItems: 'center',
  marginTop: '2px',
  marginBottom: '2px',
};
const iconStyles = {
  marginLeft: '5px',
  marginRight: '5px',
};
const whiteRoundCardStyle = {
  background: 'white',
  borderRadius: '18px',
  padding: '12px',
  marginTop: '12px',
  marginBottom: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const getQuestions = async (userId) => {
  const res = await fetch(`http://localhost:8000/api/questions?user_id=${userId}&page=0`);
  const data = await res.json();
  return data;
};

function ExpertInfo({ expertInfo = {} }) {
  const { upVoates = 100, userId = 'DefaultUser' } = expertInfo;
  return (
    <Box>
      <Box sx={{
        fontWeight: 700,
        color: '#6074DD',
        fontFamily: 'STHeiti Heavy !important',
        fontSize: '12px',
      }}
      >
        {userId}
      </Box>
      <Box sx={{
        color: '#969696',
        fontSize: '12px',
      }}
      >
        {`${upVoates} ↑ collected`}
      </Box>
    </Box>
  );
}

function ExpertGroup() {
  return <Box sx={{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "5px",
    marginBottom: "5px",
  }}
  >
    <AccountCircleIcon sx={{
      fontSize: '2.5rem',
      color: '#969696',
    }}
    />
    <ExpertInfo />
  </Box>
}

function RightTopAbout() {
  return         <Box sx={whiteRoundCardStyle}>
  <h3 style={{ fontFamily: 'STHeiti Heavy !important' }}>About</h3>
  <Box sx={aboutStyle}>
    <GroupsIcon sx={iconStyles} />
    {' '}
    246 Experts
  </Box>
  <Box sx={aboutStyle}>
    <ChatBubbleOutlineIcon sx={iconStyles} />
    {' '}
    100k Questions and Answers
  </Box>
  <Box sx={aboutStyle}>
    <NorthIcon sx={iconStyles} />
    {' '}
    50k Upvotes
  </Box>
  <Box sx={aboutStyle}>
    <TokenIcon sx={iconStyles} />
    {' '}
    145 Tokens Awarded
  </Box>
</Box>
}

function RightBottomTopExperts() {
  return <Box sx={whiteRoundCardStyle}>
          <h3 style={{ fontFamily: 'STHeiti Heavy !important' }}>Top Experts</h3>
          <ExpertGroup />
          <ExpertGroup />
          <ExpertGroup />
          <ExpertGroup />
        </Box>
}

export default function BottomContent({ isPopUpOpen, setPopUpStat, userId }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
      getQuestions(userId).then((data) => {
        data.sort((a, b) => (new Date(b.created_at) - new Date(a.created_at)));
        setQuestions(data);
      });
  }, [isPopUpOpen]);
  return (
    <Grid
      container
      xs={12}
      style={{
      }}
    >
      <Grid
        item
        xs={8}
        sx={{
          paddingLeft: '0px',
          paddingRight: '2%',
          paddingTop: '2%',
          paddingBottom: '2%',
          display: 'flex',
        }}
      >
        <Container sx={{
          height: '100%',
          display: 'flex',
          width: '100%',
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
          justifyContent: 'flex-start',
          flexDirection: 'column',
        }}
        >
          {isPopUpOpen ? <Form setPopUpState={setPopUpState} /> : <Questions questions={questions} />}
        </Container>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          paddingLeft: '2%',
          paddingRight: '0px',
          paddingTop: '2%',
          paddingBottom: '2%',
        }}
      >
        <RightTopAbout />
        <RightBottomTopExperts />
      </Grid>
    </Grid>
  );
}
