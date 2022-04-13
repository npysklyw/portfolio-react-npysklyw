import { Avatar } from 'antd';
import { Header } from '../Header/Header';
import "./Home.css"
import MainCard from '../MainCard/MainCard';
export function Home(){
     
    return(
        <div className='full-div'>

           <Header />
           <div class="spacer">
                &nbsp;
            </div>

       <div className='centerdiv'>

            <div>
            <MainCard> </MainCard>
                {/* <div className='side-div'>
                <div style={{padding:"10px"}}>
                <img width="100px" src='./IMG_5869.jpeg'>
                </img>
                </div>
                
                   
                </div> */}
                
             
         
           
            </div>
         

           
       </div>
        </div>
      
    ); 

    
}

