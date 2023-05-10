import React from 'react';
import {
  Box,
} from '@mui/material';
import Question from './Question';

export default function Questions({ questions }) {
  window.scrollTo(0, 0);
  return (
    <Box sx={{ width: '100%' }}>
      {questions.map((question) => <Question questionData={question} />)}
    </Box>
  );
}
