import React, { useState } from 'react';
import {
  Box, TextField, Button, Divider,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AbcIcon from '@mui/icons-material/Abc';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const QUESTION = "question"
const TITLE = "title"

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

const inputProps1 = {
  style: {
    padding: '10px',
    fontSize: '12px',
    fontFamily: 'STHeiti Heavy !important',
  },
};
const inputProps2 = {
  style: {
    ...inputProps1.style,
    minHeight: '60px',
  },
};

const iconStyle = {
  margin: '5px',
  fontSize: '15px',
};

const buttonStyle = {
  backgroundColor: '#99A5E5',
  borderRadius: '12px',
  color: 'white',
  height: '24px',
  fontSize: '16px',
  fontFamily: 'STHeiti Heavy !important',
  '&:hover': {
    backgroundColor: '#99A5E5',
    opacity: 0.7,
  },
};

export default function Form({ setPopUpState }) {
  const [title, setTitle] = useState('');
  const [formData, setFormData] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const emptyItems = [];
    if (!title.length) {
      emptyItems.push(TITLE);
    }
    if (!formData.length) {
      emptyItems.push(QUESTION);
    }

    if (emptyItems.length) {
      let message = `${emptyItems.join(', ')} ${emptyItems.length === 1 ? 'is' : 'are'} required!`;
      message = message[0].toUpperCase() + message.slice(1);
      alert(message);
      return;
    }
    const dataString = JSON.stringify({
      user_id: 'user1',
      title,
      question: formData,
    });

    const url = `${window.location.origin}/api/question`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: dataString,
    });

    const jsonRes = await res.json();
    console.log(jsonRes);
    setPopUpState(false);
  };

  return (
    <Box
      component="form"
      sx={whiteRoundCardStyle}
      onSubmit={onSubmitHandler}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '6px',
        marginBottom: '6px',
        alignItems: 'center',
      }}
      >
        <Box sx={{
          textAlign: 'center',
          fontFamily: 'STHeiti Heavy !important',
          fontWeight: 900,
        }}
        >
          New Question
        </Box>
        <HighlightOffIcon
          sx={{
            color: '#6074DD',
            fontSize: '1rem',
          }}
          onClick={() => {
            setPopUpState(false);
          }}
        />
      </Box>
      <Divider />
      <TextField
        size="small"
        sx={{
          marginTop: '6px',
          marginBottom: '6px',
          '& fieldset': {
            borderRadius: '14px',
          },
        }}
        inputProps={inputProps1}
        placeholder="Enter the question title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        sx={{
          paddingTop: '0px',
          '& fieldset': {
            borderRadius: '10px 10px 0px 0px',
          },
        }}
        multiline
        rows={6}
        InputProps={inputProps2}
        placeholder="Write your question here"
        onChange={(e) => {
          setFormData(e.target.value);
        }}
      />
      <Box sx={{
        borderRadius: '0px 0px 10px 10px',
        border: 1,
        borderTop: 0,
        borderColor: '#CBCBCB',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px',
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <AbcIcon sx={iconStyle} />
          <PhotoLibraryIcon sx={iconStyle} />
        </Box>
        <Button variant="contained" sx={buttonStyle} type="submit">
          Post
        </Button>
      </Box>
    </Box>
  );
}
