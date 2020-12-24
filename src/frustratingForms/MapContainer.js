import React,{useState,useEffect} from 'react'
import MapComponent from './Map'
import Button from 'react-bootstrap/BUTTON'
import './MapContainer.css'


const MapContainer=()=>{
    
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
                <Button variant='outline-primary' id='mapSubmitBtn' className="hidden">SUBMIT</Button>
            </div>
        </div>
        < MapComponent/>
    </div>
}

export default MapContainer