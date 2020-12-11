import React,{useState} from 'react'
import Robot from './Robot.js'
import Form from './Form'
import DOB from './DOB'
import './App.css'


const SideBar=(props)=>{
  const {setShowRobot,setShowForm,setShowDOB}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowForm(false);
    setShowDOB(false);
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
    }
  }
  return <div id='mainPageSidebar'>
    <button onClick={()=>{show("robot")}} className="mainPageBtn">Robot</button>
    <button onClick={()=>{show("form")}} className="mainPageBtn">Form</button>
    <button onClick={()=>{show("dob")}} className="mainPageBtn">DOB</button>
  </div>

}

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showForm,setShowForm]=useState(false);
  const [showDOB,setShowDOB]=useState(true);

  const setters={setShowRobot,setShowForm,setShowDOB};
  
  return <React.Fragment>
        <SideBar setters={setters} />
        { showRobot && <Robot />}
        { showForm && <Form />}
        {showDOB && <DOB />}
  </React.Fragment>
  
  
}

export default App
