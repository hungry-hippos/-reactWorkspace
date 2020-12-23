import React,{useState,useEffect} from 'react'
import Robot from './Robot.js'
import DOB from './DOB'
import Minigame from './MinigamesForm'
import MapContainer from './MapContainer'
import ContactInfo from './ContactInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const SideBar=(props)=>{
  const {setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowDOB(false);
    setShowMinigame(false);
    setShowMap(false);
    setShowContactInfo(false);
    switch(component){
      case "robot":
        setShowRobot(true);
        break;
      case "dob":
        setShowDOB(true);
        break;
      case "minigame":
        setShowMinigame(true);
        break;
      case "map":
        setShowMap(true);
        break;
      case "contact":
        setShowContactInfo(true);
        break;
      default:
        break;
    }
  }
  return <div id='mainPageSidebar'>
    <button onClick={()=>{show("robot")}} className="mainPageBtn">Robot</button>
    <button onClick={()=>{show("dob")}} className="mainPageBtn">DOB</button>
    <button onClick={()=>{show('minigame')}} className='mainPageBtn'>Minigame</button>
    <button onClick={()=>{show('map')}} className='mainPageBtn'>Map</button>
    <button onClick={()=>{show('contact')}} className='mainPageBtn'>Contact</button>

  </div>

}

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showDOB,setShowDOB]=useState(false);
  const [showMinigame,setShowMinigame]=useState(false);
  const [showMap,setShowMap]=useState(false);
  const [showContactInfo,setShowContactInfo]=useState(true);

  const setters={setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo};
  
  return <React.Fragment>
        <SideBar setters={setters} />
        {showRobot && <Robot />}
        {showDOB && <DOB />}
        {showMinigame && <Minigame />}
        {showMap && <MapContainer />}
        {showContactInfo && <ContactInfo />}
  </React.Fragment>
  
  
}

export default App
