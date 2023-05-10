import React from 'react';
import { Box, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserInfo({ userInfo = {} }) {
  const { numAnwsers = 100, numQuestions = 100, userId = 'DefaultUser' } = userInfo;
  return (
    <Box>
      <Box sx={{
          fontWeight: 700,
          color: '#6074DD',
          fontFamily: 'STHeiti Heavy !important',
        }}
      >
        {userId}
      </Box>
      <Box sx={{
        color: '#969696',
      }}
      >
        {`${numAnwsers} Answer${numAnwsers > 1 ? 's' : ''} ${'·'} ${numQuestions} Question${numQuestions > 1 ? 's' : ''}`}
      </Box>
    </Box>
  );
}

function UserCard({ userInfo }) {
  return (
    <Box>
      <Box sx={{
        marginTop: '10px',
        marginBottom: '6px',
        fontWeight: 'bold',
        fontFamily: 'STHeiti Heavy !important',
      }}
      >
        Asked By:
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
        <AccountCircleIcon sx={{
          fontSize: '2.5rem',
          color: '#969696',
        }}
        />
        <UserInfo userInfo={userInfo} />
      </Box>
    </Box>
  );
}

export default function Question({ questionData }) {
  const { title, question, user_id:userId } = questionData;
  return (
    <Box sx={{
      background: 'white',
      borderRadius: '18px',
      fontSize: '12px',
      padding: '12px',
      marginTop: '12px',
      marginBottom: '12px',
      fontFamily: 'STHeiti Heavy !important',
    }}
    >
      <Box sx={{
        fontWeight: 'bold !important',
        marginTop: '4px',
        marginBottom: '4px',
        fontFamily: 'STHeiti Heavy !important',
      }}
      >
        {title}
      </Box>
      <Box sx={{
        marginTop: '4px',
        marginBottom: '10px',
        lineHeight: '140%',
      }}
      >
        {question}
      </Box>
      <Divider />
      <UserCard userInfo={{userId}}/>
    </Box>
  );
}
