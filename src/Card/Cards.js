import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css'
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
      card: {
        background: "#87644",
      },
    },
    typography: {
      fontSize: 17,
      fontFamily: [
        'Georgia',
      ].join(','),
      button: {
        textTransform: 'none'
      },
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

const card = (name,desc,loc,org,img,ll,rD) => (
  <React.Fragment>
    <CardContent>
    <Typography sx={{ fontSize: 13,fontFamily: [
      'Georgia',
    ].join(',') }} variant="h5" component="div" color="#7D8B7B">
       {loc}
      </Typography>
      <Typography variant="h3" color="text.primary" gutterBottom color="#87644B">
        {name}
      </Typography>
      
      <Typography sx={{ fontSize: 18,fontFamily: [
      'Georgia',
    ].join(',') }} variant="h6" component="div">
        <a style={{textDecoration: "none",color: "inherit"}} href={ll}>{org}</a>
       
        
      </Typography>

<div style={{padding:"10px"}}>
<img width="70" src={img} />
</div>
    
      
      <Typography sx={{ fontSize: 16,fontFamily: [
      'Georgia',
    ].join(',') }} color="text.primary">
        {desc}
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button theme={theme} size="small"> </Button> */}
      <BasicModal rD={rD} t={theme} ti={name + " @ " + org} desc="More about this Position"></BasicModal>
    </CardActions>
    
  </React.Fragment>

);

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <div styles={{backgroundColor: "red"}}>
      <Card variant="outlined" styles={{minWidth: 300}}>{card(props.name,props.description,props.location,props.org,props.img,props.ll,props.rD)}</Card>
      </div>
      
    </Box>
  );
}