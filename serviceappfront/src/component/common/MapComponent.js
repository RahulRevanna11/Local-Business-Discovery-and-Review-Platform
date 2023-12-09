// MapComponent.js
import markerIconPng from "../../assets/location.png"
import { Icon } from 'leaflet'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from "react-icons/fa";
const MapComponent = ({ locations, zoom, height, width, center, youserLocation }) => {
  console.log(locations);
  // const markerIcon = new L.Icon({
  //   iconUrl: 'path-to-your-custom-marker-icon.png', // Specify the path to your custom marker icon
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   tooltipAnchor: [16, -28],
  // });
  return (

    <MapContainer center={center ? center : [0, 0]} zoom={zoom ? zoom : 3} style={{ height: height ? height : '80%', width: width ? width : '100%' }} className="z-10">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker key={index} position={[location.latitude, location.longitude]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [35, 50], iconAnchor: [50, 50] })} >

          <Popup>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}${location.name} `}</Popup>
          {/* < FaMapMarkerAlt color="red" size={25} className='text-red-500'/> */}
          {/* <MarkerIcon /> */}
        </Marker>
      ))}

      {youserLocation && youserLocation?.lng !== 0 && youserLocation?.lat !== 0 && <Marker position={[youserLocation.lat, youserLocation.lng]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >

        <Popup>{`Your Location `}</Popup>
        {/* < FaMapMarkerAlt color="red" size={25} className='text-red-500'/> */}
        {/* <MarkerIcon /> */}
      </Marker>}
    </MapContainer>
  );
};

export default MapComponent;
