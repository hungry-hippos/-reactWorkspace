import React,{useState} from 'react'
import Robot from './Robot.js'
import Form from './Form'
import DOB from './DOB'
import Minigame from './MinigamesForm'
import './App.css'


const SideBar=(props)=>{
  const {setShowRobot,setShowForm,setShowDOB,setShowMinigame}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowForm(false);
    setShowDOB(false);
    setShowMinigame(false);
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
      default:
        break;
    }
  }
  return <div id='mainPageSidebar'>
    <button onClick={()=>{show("robot")}} className="mainPageBtn">Robot</button>
    <button onClick={()=>{show("form")}} className="mainPageBtn">Form</button>
    <button onClick={()=>{show("dob")}} className="mainPageBtn">DOB</button>
    <button onClick={()=>{show('minigame')}} className='mainPageBtn'>Minigame</button>

  </div>

}

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showForm,setShowForm]=useState(false);
  const [showDOB,setShowDOB]=useState(false);
  const [showMinigame,setShowMinigame]=useState(true);

  const setters={setShowRobot,setShowForm,setShowDOB,setShowMinigame};
  
  return <React.Fragment>
        <SideBar setters={setters} />
        { showRobot && <Robot />}
        { showForm && <Form />}
        {showDOB && <DOB />}
        {showMinigame && <Minigame />}
  </React.Fragment>
  
  
}

export default App
