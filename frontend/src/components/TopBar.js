import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const buttonStyle = {
  backgroundColor: '#6074DD', borderRadius: '12px', color: 'white', height: '24px', fontSize: '10px', fontWeight: '400',
};
const toolbarStyle = {
  disply: 'flex',
  justifyContent: 'flex-end',
};
export default function TopBar({ setPopUpState }) {
  return (
    <Box sx={{
      flexGrow: 1,
      position: 'fixed',
      top: 0,
      width: '100%',
    }}
    >
      <AppBar position="static" style={{ background: '#D9D9D9', display: "flex", justifyContent:"space-between" }}>
        <Toolbar style={toolbarStyle}>
          <Button
            variant="contained"
            sx={buttonStyle}
            onClick={() => {
              setPopUpState(true);
            }}
          >
            Ask a question
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
