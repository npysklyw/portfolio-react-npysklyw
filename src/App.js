import logo from './logo.svg';
import {Home} from './Home/Home'
import { Portfolio } from './Portfolio/Portfolio';
import { Education } from './Education/Education';
import {Projects} from "./Projects/Projects";
import {
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <div >
      
      <Routes >
            <Route path="/portfolio-react-npysklyw" element={<Home/>} />
            <Route path="/portfolio-react-npysklyw/portfolio"  element={<Portfolio/>} />
            <Route path="/portfolio-react-npysklyw/education"  element={<Education/>}/>
            <Route path="/portfolio-react-npysklyw/projects"  element={<Projects/>}/>
          </Routes>
     
    </div>
  );
}

export default App;
