import React,{useState,useEffect} from 'react'
import MapComponent from './Map'
import './MapContainer.css'


const MapContainer=()=>{
    
    return <div id='mainMapDiv'>
        <h1 id='addressTitle'>HOME ADDRESS</h1>
        <hr id='addressHr'></hr>
        <div id='addressTextDiv'>
            <p>Click on the map to auto-complete your main residence's latitude and longitude coordinates.</p>
            <div> 
                <label htmlFor='latCoord' className="coordLabel">LAT: </label>
                <input type='text' id='latCoord' className="coordInput" disabled></input>
                <label htmlFor='lngCoord' className="coordLabel" style={{marginLeft:"30px"}}>LNG: </label>
                <input type='text' id='lngCoord' className="coordInput" disabled></input>
            </div>
        </div>
        < MapComponent/>
    </div>
}

export default MapContainer