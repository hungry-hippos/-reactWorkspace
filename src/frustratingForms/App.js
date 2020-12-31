import React,{useState} from 'react'
import Robot from './Robot.js'
import DOB from './DOB'
import Minigame from './MinigamesForm'
import MapContainer from './MapContainer'
import ContactInfo from './ContactInfo'
import Summary from './Summary'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const SideBar=(props)=>{
  const {setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo,setShowSummary}=props.setters;

  const show=(component)=>{
    setShowRobot(false);
    setShowDOB(false);
    setShowMinigame(false);
    setShowMap(false);
    setShowContactInfo(false);
    setShowSummary(false);
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
      case 'summary':
        setShowSummary(true);
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
    <button onClick={()=>{show('summary')}} className='mainPageBtn'>Summary</button>

  </div>

};

const CollectedData=(props)=>{

  return <React.Fragment>
    <table id='collectedDataTable'>
    <tbody>
      <tr>
        <td>FIRST NAME</td>
        <td id='firstNameField' className='dataInputField'>Cornelius</td>
      </tr>
      <tr>
        <td>LAST NAME</td>
        <td id='lastNameField' className='dataInputField'>Angelo</td>
      </tr>
      <tr>
        <td>DOB</td>
        <td id='DOBField' className='dataInputField'>sept/12/1212</td>
      </tr>
      <tr>
        <td>ADDRESS LNG</td>
        <td id='lngField' className='dataInputField'>6969</td>
      </tr>
      <tr>
        <td>ADDRESS LAT</td>
        <td id='latField' className='dataInputField'>420</td>
      </tr>
      <tr>
        <td>EMAIL</td>
        <td id='emailField' className='dataInputField'>mike@whataspp.com</td>
      </tr>
      <tr>
        <td>PHONE</td>
        <td id='phoneField' className='dataInputField'>Not Provided</td>
      </tr>
    </tbody>
    </table>
  </React.Fragment>

};

function App() {
  const [showRobot,setShowRobot]=useState(false);
  const [showDOB,setShowDOB]=useState(false);
  const [showMinigame,setShowMinigame]=useState(false);
  const [showMap,setShowMap]=useState(false);
  const [showContactInfo,setShowContactInfo]=useState(false);
  const [showSummary,setShowSummary]=useState(true);

  const setters={setShowRobot,setShowDOB,setShowMinigame,setShowMap,setShowContactInfo, setShowSummary};
  
  return <React.Fragment>
        <SideBar setters={setters} />
        <CollectedData />
        {showMinigame && <Minigame />}
        {showDOB && <DOB />}
        {showMap && <MapContainer />}
        {showContactInfo && <ContactInfo />}
        {showSummary && <Summary />}
        {showRobot && <Robot />}
  </React.Fragment>
  
  
}

export default App
