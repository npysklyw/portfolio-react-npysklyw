import logo from './logo.svg';
import {Home} from './Home/Home'
import { Portfolio } from './Portfolio/Portfolio';
import { Education } from './Education/Education';
import {Projects} from "./Projects/Projects";
import {
  Route,
  Routes,
  HashRouter
} from 'react-router-dom'

function App() {
  return (
    <div >
      
      <HashRouter basename="/">
            <Route path="/" element={<Home/>} />
            <Route path="/portfolio"  element={<Portfolio/>} />
            <Route path="/education"  element={<Education/>}/>
            <Route path="/projects"  element={<Projects/>}/>
          </HashRouter>
     
    </div>
  );
}

export default App;
