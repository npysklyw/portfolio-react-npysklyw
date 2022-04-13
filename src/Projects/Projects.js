import { Header } from '../Header/Header';
import Box from '@mui/material/Box';
import SimplePaper from '../Paper/Paper';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';


export function Projects(){
    return(
       <div>
           <Header />
           
           <div class="spacer">
                &nbsp;
            </div>
           {/* <SimplePaper>Hullo</SimplePaper> */}
           <Container>
               <Grid direction="object" container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
               <Grid item xs={4}> <ProjectCard skills="React, Elasticsearch, Python" name="Video Summary Application" description="Designed and developed a framework for storing and analyzing videos. Built using React for the video search framework and Python machine learning for the video analysis. This project won the CANSOFCOM prize at Hack the North 2020."></ProjectCard></Grid>
                    <Grid item xs={4} > <ProjectCard skills="React, Express, MySQL" name="Game Store Management Tool" description="Developed a Game Store Management tool using React, Express, and MySQL.
"></ProjectCard></Grid>
                    <Grid item xs={3}> <ProjectCard skills="Java, SQL, Software Development Process" name="Publisher Database Application" description="Developed a Java GUI application for a hypothetical client, with functionality to interact with a SQL database to track various Publisher attributes."></ProjectCard></Grid>
                    <Grid item xs={5}> <ProjectCard skills="Java, SQL, Software Development Process" name="Alzheimer Stage Prediction Webapp" description="Lead a team of students to develop an AI-based web application that could predict a stage of Dementia in an Alzheimer’s patient upon analysis of an MRI skull scan. Utilizes HTML frontend and Python Flask Backend."></ProjectCard></Grid>
                    <Grid item xs={6}> <ProjectCard skills="Java, SQL, Software Development Process" name="Chatroom Application" description="·	Designed a chatroom application allowing for client handling on multiple devices. The backend was constructed with C++ and was hosted on GCP. The frontend was built with C#."></ProjectCard></Grid>

               </Grid>
           </Container>
       </div>
    ); 
}

