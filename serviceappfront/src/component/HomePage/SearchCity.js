import React, { useState, useEffect } from "react";
import { setLatitude, setLongitude } from "../../slices/locationSlice";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import{LuCalendarSearch} from "react-icons/lu"
import {BsArrowRightCircleFill} from"react-icons/bs"
import { Navigate, useNavigate } from "react-router";
const CitySearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Sangli");
  const [error, setError] = useState("");
  const [emptyError, setemptyError] = useState(false);
  const [keyword,setKeyword]=useState("");
  const navigate=useNavigate();
  useEffect(() => {
    // To debounce the input and avoid making too many requests
    
    const timeoutId = setTimeout(() => {
      if (query.trim() !== "" && !selectedCity) {
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
    setSelectedCity(null);
  };
  const handleChange=(event)=>{
    setKeyword(event.target.value);
    setemptyError(false)
  }
  const handleSelectCity = (city) => {
    console.log(city);
    dispatch(setLatitude(city.lat));
    dispatch(setLongitude(city.lng));
    setSelectedCity(city);
    setQuery(city.formatted); // Set the input field to the selected city name
    setResults([]); // Clear suggestions
  };
  const handleSubmit=()=>{
    if(keyword==='')
    {
      setemptyError(true);
      return;
    }
    navigate(`/search/:${keyword}/:${selectedCity?selectedCity.lat:null}/:${selectedCity?selectedCity.lng:null}`)

    

  }

  const searchCities = async () => {
    try {
      const apiKey = "3233f258d2654397adcf095edf0a0ffe";
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        // Extract relevant city information (name and description)
        const cityResults = data.results.map((result) => ({
          formatted: result.formatted,
          city: result.components.city,
          country: result.components.country,
          lat: result.geometry.lat,
          lng: result.geometry.lng,
        }));

        setResults(cityResults);
        setError("");
      } else {
        setResults([]);
        setError("No results found");
      }
    } catch (error) {
      console.error("Error searching cities:", error);
      setResults([]);
      setError("An error occurred while fetching data");
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="container  mt-8 w-full z-20">
      <div className=" bg-white p-8 border border-gray-300 rounded-3xl shadow-md relative flex justify-between">
        <div className=" ">
          <div className=" flex items-center border-2 border-neutral-600  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl">
            {/* <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              Enter a city name:
            </label> */}
            <FaMapMarkerAlt size={24} />
            <input
              type="text"
              id="city"
              value={query}
              onChange={handleInputChange}
              className=" appearance-none text-xl font-bold w-full border-none focus:outline-none rounded-xl"
              placeholder="Enter Location"
            />
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className=" bg-white opacity-1 opacity-100 z-50 absolute">
            {results.length > 0 && results.length < 5 ? (
              <div className="  flex flex-col gap-3">
                <ul className="bg-white opacity-1 opacity-100 z-50">
                  {results.map((city, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectCity(city)}
                      className="cursor-pointer hover:text-blue-500 bg-white opacity-1"
                    >
                      {city.formatted}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="  flex flex-col gap-3">
                <ul>
                  {results?.slice(0, 5).map((city, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectCity(city)}
                      className="cursor-pointer hover:text-blue-500"
                    >
                      {city.formatted.split(" ,")[0]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* {selectedCity && (
            <div className="mt-4">
              <p className="font-semibold">Selected City:</p>
              <p>{selectedCity.formatted}</p>
              <p>
                Latitude: {selectedCity.lat}, Longitude: {selectedCity.lng}
              </p>
            </div>
          )} */}
        </div>

        <div>
          <div className=" flex items-center border-2 border-neutral-600  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-xl">
            <LuCalendarSearch size={25}/>
            <input
              type="text"
              //  value={query}
              //  onChange={handleInputChange}
              className="appearance-none text-xl font-bold  border-none focus:outline-none w-[70%] "
              placeholder={"Enter something what are you lokking for"}
              onChange={handleChange} value={keyword}
            ></input>
          </div>
       {emptyError&&<p className="text-red-400"><sup>*</sup>Please enter keyword</p>}
     
        </div>
        <div  >
            <button className="flex items-center gap-2 border-1 bg-green-600 p-2 rounded-lg"onClick={handleSubmit} ><p className="text-lg">Get Result</p>
            <BsArrowRightCircleFill size={25}/>
            </button>
          </div>
      </div>
    </div>
  );
};

export default CitySearch;
