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
      
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/portfolio"  element={<Portfolio/>} />
            <Route path="/education"  element={<Education/>}/>
            <Route path="/projects"  element={<Projects/>}/>
          </Routes>
     
    </div>
  );
}

export default App;
