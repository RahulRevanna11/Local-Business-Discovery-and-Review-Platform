import React, { useState } from 'react';
import { setLatitude,setLongitude } from "../../slices/locationSlice";
import { useDispatch } from 'react-redux';
const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
 const dispatch=useDispatch();
  const getLocation = () => {
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          dispatch(setLatitude(latitude));
  dispatch(setLongitude(longitude));
          setErrorMessage('');

        },
        (error) => {
          setErrorMessage('Error getting location: ' + error.message);
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">User Location</h2>

        {/* Display error message if location is not available */}
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            <p className="font-bold">Error</p>
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Display location if available */}
        {location && (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        )}

        {/* Button to get user's location */}
        <button
          onClick={getLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get Location
        </button>
      </div>
    </div>
  );
};

export default LocationComponent;
