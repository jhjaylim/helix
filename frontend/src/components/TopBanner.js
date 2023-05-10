import * as React from 'react';
import { Box } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

export default function TopBanner() {
  return (
    <Box style={{
      minHeight: '120px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#969696',
      borderRadius: '18px',
      width: '100%',
    }}
    >
      <ElectricBoltIcon fontSize="large" />
      <Box sx={{
        color: '#33324C',
        fontWeight: 900,
        fontSize: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        fontFamily: 'STHeiti Heavy !important',
      }}
      >
        Near Protocol
      </Box>
    </Box>
  );
}
