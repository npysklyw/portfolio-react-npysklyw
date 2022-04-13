import { Header } from '../Header/Header';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import EduCard from '../EduCard/EduCard';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';


export function Education(){
    return(
       <div>
         <div>
         <Header />
         </div>
         <div class="spacer">
                &nbsp;
            </div>
           

           <div>
           
    <Container>
               <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item> <EduCard img="https://www.heraldry-wiki.com/heraldrywiki/images/7/71/Uwestontario.jpg"></EduCard></Grid>
               </Grid>
           </Container>

    
    {/* <img width="400" src="https://www.heraldry-wiki.com/heraldrywiki/images/7/71/Uwestontario.jpg" /> */}
           </div>
           
           
       </div>
    ); 
}

