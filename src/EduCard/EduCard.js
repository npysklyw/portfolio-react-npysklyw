import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import "./EduCard.css"


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

const card = (img,name,desc,loc,org,ll) => (
  <React.Fragment>
    <CardContent>
    <Typography sx={{ fontSize: 13,fontFamily: [
      'Georgia',
    ].join(',') }} variant="h5" component="div" color="#7D8B7B">
       London, Ontario
      </Typography>
      <Typography variant="h3" color="text.primary" gutterBottom color="#8359A3">
        Western University
      </Typography>
      <Typography variant="h2" color="text.primary" gutterBottom color="#8359A3">
        IN PROGRESS: Bachelor of Engineering 
      </Typography>
      
      

<div style={{justifyContent:"right"}}>
<img width="300" src={img} />
</div>
    
      
      <Typography sx={{ fontSize: 16,fontFamily: [
      'Georgia',
    ].join(',') }} color="text.primary">
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button theme={theme} size="small">See More</Button>
    </CardActions>
    
  </React.Fragment>

);

export default function EduCard(props) {
  return (
    <Box sx={{ minWidth: 1000 }}>
      <Card variant="outlined" styles={{minWidth: 300}}>{card(props.img)}</Card>
    </Box>
  );
}
      
  