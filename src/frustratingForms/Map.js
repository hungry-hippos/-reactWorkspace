import React,{useState,useEffect} from 'react'
import { GoogleMap, Marker,useLoadScript,infoWindow } from "@react-google-maps/api"


const libraries=['places'];
const mapContainerStyle={
    width: "800px",
    height:"313px",

}
const center={
    lat: 43.653225,
    lng: -79.383186
}

const options={
    disableDefaultUI:true,
    zoomControl:true
}

export default function App(){
    const [marker,setMarker]=useState(0);

    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey: "AIzaSyADRSKpCJTkkLxQ8h7WDFUiPxOked1x1fg",
        libraries
    })

    useEffect(()=>{
        if (marker===0){
            document.getElementById('latCoord').value="";
            document.getElementById('lngCoord').value="";
            return;
        }
        document.getElementById('latCoord').value=marker.lat;
        document.getElementById('lngCoord').value=marker.lng;
    },[marker])


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return <div>
        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={2}
            center={center}
            options={options}
            onClick={(e)=>{
                setMarker(
                {
                    lat:e.latLng.lat(),
                    lng:e.latLng.lng()
                });
            }}
            >
        { marker===0 || <Marker position={{lat:marker.lat, lng:marker.lng}} />}
        </GoogleMap>
    </div>

}

