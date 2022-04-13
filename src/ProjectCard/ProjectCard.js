import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import BasicModal from '../Modal/Modal';

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#000000',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
    typography: {
      fontSize: 17,
      fontFamily: [
        'Georgia',
      ].join(','),
      button: {
        textTransform: 'none',
      }
    }
  });

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (name,desc,sk) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h3" color="text.primary" gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 18,fontFamily: [
      'Georgia',
    ].join(',') }} variant="h6" component="div">
        {desc}
        
      </Typography>
      <Typography sx={{ fontWeight: 600,fontSize: 15,fontFamily: [
      'Georgia',
    ].join(',') }} variant="p" component="div">
       
       Skills Associated: 
      </Typography>
      <Typography sx={{fontSize: 14,fontFamily: [
      'Georgia',
    ].join(',') }} variant="p" component="div">      
        <ul>
        <li>{sk.split(',')[0]}</li>
        <li>{sk.split(',')[1]}</li>
        <li>{sk.split(',')[2]}</li>
        </ul>
      </Typography>
    </CardContent>
    <CardActions>
      <Button theme={theme} size="small">GitHub</Button>
      <Button theme={theme} size="small">Demo</Button>
    </CardActions>

   
    
  </React.Fragment>

);

export default function ProjectCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" styles={{minWidth: 300}}>{card(props.name,props.description,props.skills)}</Card>
    </Box>
  );
}