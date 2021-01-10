import React from 'react'
import MapComponent from './Map'
import {Button} from 'react-bootstrap'
import './MapContainer.css'


const MapContainer=()=>{

    const submitData=()=>{
        const lat=document.getElementById('latCoord').value;
        const lng=document.getElementById('lngCoord').value;
        document.getElementById('latField').textContent=lat;
        document.getElementById('lngField').textContent=lng;

        document.getElementById('contactSideBar').click();
    }
    
    return <div id='mainMapDiv'>
        <h1 id='addressTitle'>HOME ADDRESS</h1>
        <hr id='addressHr'></hr>
        <div id='addressTextDiv'>
            <p>Click on the map to auto-complete the latitude and longitude coordinates of your home address.</p>
            <div> 
                <label htmlFor='latCoord' className="coordLabel">LAT: </label>
                <input type='text' id='latCoord' className="coordInput" disabled></input>
                <label htmlFor='lngCoord' className="coordLabel" style={{marginLeft:"30px"}}>LNG: </label>
                <input type='text' id='lngCoord' className="coordInput" disabled></input>
                <Button variant='outline-primary' id='mapSubmitBtn' className="hidden" onClick={submitData}>SUBMIT</Button>
            </div>
        </div>
        < MapComponent/>
    </div>
}

export default MapContainer