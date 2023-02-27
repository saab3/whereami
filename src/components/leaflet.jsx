import React, { useState , useEffect} from 'react'
import { Popup, Marker, MapContainer, TileLayer, useMap } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
function Leaflet({lat,long}) {
  const RecenterAutomatically = ({lat,long}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, long]);
     }, [lat, long]);
     return null;
   }
  return (
    <MapContainer center={[lat, long]} zoom={5} scrollWheelZoom={true}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, long]}>
      <Popup>
        What are you looking for?
      </Popup>
    </Marker>
    <RecenterAutomatically lat={lat} long={long} />
    </MapContainer>
  )
}

export default Leaflet