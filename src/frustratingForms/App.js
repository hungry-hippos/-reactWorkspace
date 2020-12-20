import React,{useState,useEffect} from 'react'
import Robot from './Robot.js'
import Form from './Form'
import DOB from './DOB'
import Minigame from './MinigamesForm'
import MapContainer from './MapContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const SideBar=(props)=>{
  const {setShowRobot,setShowForm,setShowDOB,setShowMinigame,setShowMap}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowForm(false);
    setShowDOB(false);
    setShowMinigame(false);
    setShowMap(false);
    switch(component){
      case "robot":
        setShowRobot(true);
        break;
      case "form":
        setShowForm(true);
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
      default:
        break;
    }
  }
  return <div id='mainPageSidebar'>
    <button onClick={()=>{show("robot")}} className="mainPageBtn">Robot</button>
    <button onClick={()=>{show("form")}} className="mainPageBtn">Form</button>
    <button onClick={()=>{show("dob")}} className="mainPageBtn">DOB</button>
    <button onClick={()=>{show('minigame')}} className='mainPageBtn'>Minigame</button>
    <button onClick={()=>{show('map')}} className='mainPageBtn'>Map</button>

  </div>

}

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showForm,setShowForm]=useState(false);
  const [showDOB,setShowDOB]=useState(false);
  const [showMinigame,setShowMinigame]=useState(false);
  const [showMap,setShowMap]=useState(true);

  const setters={setShowRobot,setShowForm,setShowDOB,setShowMinigame,setShowMap};
  
  return <React.Fragment>
        <SideBar setters={setters} />
        { showRobot && <Robot />}
        { showForm && <Form />}
        {showDOB && <DOB />}
        {showMinigame && <Minigame />}
        {showMap && <MapContainer />}
  </React.Fragment>
  
  
}

export default App
