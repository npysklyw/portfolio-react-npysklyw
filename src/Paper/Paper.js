import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme } from '@material-ui/core';


const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} variant="outlined" square />
      <Paper elevation={0} variant="outlined" square/>
      <Paper elevation={0} variant="outlined" square/>
      <Paper theme={darkTheme} elevation={0} variant="outlined" square/>
    </Box>
  );
}