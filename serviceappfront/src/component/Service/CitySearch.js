import React, { useState, useEffect } from 'react';
import { setLatitude,setLongitude } from "../../slices/locationSlice";
import { useDispatch } from 'react-redux';
const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // To debounce the input and avoid making too many requests
    const timeoutId = setTimeout(() => {
      if (query.trim() !== '') {
        searchCities();
      } else {
        setResults([]);
      }
    }, 300);

    // Cleanup the timeout on component unmount or when the query changes
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectCity = (city) => {
    console.log(city);
  dispatch(setLatitude(city.lat));
  dispatch(setLongitude(city.lng));
    setSelectedCity(city);
    setQuery(city.formatted); // Set the input field to the selected city name
    setResults([]); // Clear suggestions
  };

  const searchCities = async () => {
    
    try {
      const apiKey = '3233f258d2654397adcf095edf0a0ffe';
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // Extract relevant city information (name and description)
        const cityResults = data.results.map(result => ({
          formatted: result.formatted,
          city: result.components.city,
          country: result.components.country,
          lat: result.geometry.lat,
          lng: result.geometry.lng,
        }));

        setResults(cityResults);
        setError('');
      } else {
        setResults([]);
        setError('No results found');
      }
    } catch (error) {
      console.error('Error searching cities:', error);
      setResults([]);
      setError('An error occurred while fetching data');
    }
  };
  const dispatch=useDispatch();
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-6">City Search</h2>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            Enter a city name:
          </label>
          <input
            type="text"
            id="city"
            value={query}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {results.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold">Results:</p>
            <ul>
              {results.map((city, index) => (
                <li key={index} onClick={() => handleSelectCity(city)} className="cursor-pointer hover:text-blue-500">
                  {city.formatted}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedCity && (
          <div className="mt-4">
            <p className="font-semibold">Selected City:</p>
            <p>{selectedCity.formatted}</p>
            <p>Latitude: {selectedCity.lat}, Longitude: {selectedCity.lng}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySearch;
