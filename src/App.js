// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Intro from './Components/Intro/Intro';
import FDP from './Components/FDP/FDP';
import About from './Components/About/About';
import Speakers from './Components/Speakers/Speakers';
import Registration from './Components/Registration/Registration';
import CoOrdinators from './Components/CoOrdinators/CoOrdinators';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-scroll';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="imgApp" style={{"position":"relative"}}>
        <img src="/images/ssnimage.jpg" style={{"width":"100%", "height":"100vh", "filter" : "brightness(40%)"}}></img>
        <Intro/>
      </div>
    <div id='FDP'>
        <FDP/>
    </div>
    <div id='About'>
        <About/>
    </div>
    <div id="speakers">
<Speakers/>
    </div>
    <div id="CoOrdinators">
      <CoOrdinators/>
    </div>
    <div id="Registration">
    <Registration/>
    </div>
    <div id="footer">
    <Footer/>
    </div>
   
    </div>
  );
}

export default App;
