import { Header } from '../Header/Header';
import OutlinedCard from '../Card/Cards';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';

export function Portfolio(){
    return(
       <div>
           <Header />
           <text>Hi</text>
           <div class="spacer">
                &nbsp;
            </div>
           

           <Container>
               <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
                    <Grid item  xs={5} > <OutlinedCard img="https://upload.wikimedia.org/wikipedia/en/3/3d/CANSOFCOMbadge.png?1645627517823" name="Virtual Force Analyst" org="CANSOFCOM" description="Constructing a framework for video storage and analysis, using Python and React to allow for searching of specific objects and actions." location="Remote Position" rD="I am learning a loooot of machine learniong"></OutlinedCard></Grid>
                    <Grid item xs={7}> <OutlinedCard ll="https://www.google.com/maps/place/Department+of+Earth+Sciences/@43.6601013,-79.3991585,17z/data=!3m1!4b1!4m5!3m4!1s0x882b35cd140559eb:0x5a4a3f89e5f4b248!8m2!3d43.6601013!4d-79.3991585" img="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1920px-Utoronto_coa.svg.png" org="University of Toronto Earth Sciences" name="NSERC Research Student" location="Remote Position" description="Produced new research results that quantitatively demonstrate the processes of lithospheric dynamics to explain enigmatic surface tectonics.
" rD={`
Developed and ran 3D computational models of geophysical fluid mechanics using the ASPECT mantle convection library with high-performance parallel computing techniques,Gained experience compiling and executing jobs on Compute Canada supercomputer clusters,Funded through a competitive Natural Sciences and Engineering Research Council of Canada (NSERC) Undergraduate Student Research Award`}></OutlinedCard></Grid>
                    <Grid item xs={7} > <OutlinedCard  img="https://i0.wp.com/www.westernusc.store/wp-content/uploads/2019/09/Western-AI-Logo.png?fit=1490%2C1490&ssl=1" org="Western AI" name="Project Manager" location="Remote Position" description="Developed a tool to allow for quick determination of potential severe stage change of Alzheimer patients in the form of a web app which used HTML/CSS for a frontend, and Python for backend. I led and taught a team of individuals to undertake the project."></OutlinedCard></Grid>
                    <Grid item xs={5} > <OutlinedCard ll="https://www.google.com/maps/place/Honda+of+Canada+Mfg./@44.149257,-79.84182,17z/data=!3m1!4b1!4m5!3m4!1s0x882aeec5e3b9f7c1:0xb36eac73bbf0ad40!8m2!3d44.149257!4d-79.84182" img="https://i.pinimg.com/564x/42/be/af/42beaf79288d33966a0ee6f0c7d244fb.jpg" org="Honda Canada MFG." name="Summer Associate" location="Alliston, Ontario" description="Applied processes to various parts of the underbody of vehicles on the assembly line in a high-precision and high-stress environment."></OutlinedCard></Grid>
               </Grid>
           </Container>
       </div>
    ); 
}

