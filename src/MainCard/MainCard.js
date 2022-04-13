import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import "./MainCard.css"


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

const card = () => (
  <React.Fragment>
    <CardContent>
      
    <Typography variant="h4" color="text.primary" gutterBottom>
      <div>
                <h1 className="Name">Nicholas Pysklywec</h1>
                </div>

      </Typography>
      <div >
      <Typography variant="p" color="text.primary" gutterBottom>
               
               </Typography>
               <div className="d">
               <Typography variant="p" color="text.primary" gutterBottom>
               <p className="Name">I am a 3rd year software engineering student at Western University, curious to explore new technologies. </p>
               <p className="Name">I have a diverse range of experiences with software in my life. Ranging from Raspberry pi tinkering, to network security, to machine learning, to front end development. </p>
               <p className="Name">I built this portfolio site to learn more about me, and my many software related domains I have intereacted with.</p>
               </Typography>
               </div>
               
           </div>
           <div>
           {/* <img width="500" src="https://media-exp1.licdn.com/dms/image/C4E03AQEM2jO1KvXYKA/profile-displayphoto-shrink_800_800/0/1637612670029?e=1651104000&v=beta&t=q2PTEIi3c_Rr8p6izH9myqugrjc0VqBys5nDedf9E-A" /> */}
           </div>
     
    </CardContent>
    <CardActions>
      {/* <Button theme={theme} size="small">GITHUB</Button>
      <Button theme={theme} size="small">DEMO</Button> */}
    </CardActions>
    
  </React.Fragment>

);

export default function MainCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" styles={{minWidth: 300}}>{card()}</Card>
    </Box>
  );
}