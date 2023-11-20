import React, { useState, useEffect } from "react";
import "./homeDiv4.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { FaBriefcaseMedical } from "react-icons/fa";
function ServiceCards({ subcategory }) {
  const [healthcareServiceIds, setHealthcareServiceIds] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:1000/servicesSubtype')
  //     .then(response => {
  //       const serviceSubtypes = response.data.find(item => item[props.serviceName]);

  //       if (serviceSubtypes) {
  //         const serviceTypes = serviceSubtypes[props.serviceName];
  //         const ids = serviceTypes.map(service => service.id);
  //         setHealthcareServiceIds(ids);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Axios error:', error);
  //     });
  //   // }, [props.serviceName]);
  useEffect(() => {
    const services = subcategory.service.slice(0, 3);
    setHealthcareServiceIds(services);
  }, []);
  console.log(subcategory);
  return (
    <div className="flex flex-col border-2 card-conatainer mt-4 rounded-xl bg-customBackground-100  p-4 ">
      <p>{subcategory.name}</p>
      <div className="flex gap-5">
      {healthcareServiceIds.map((item) => (
        <div
          className="company-card transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-indigo-500/40 duration-300 flex justify-between align-middle w-26"
          key={item._id}
        >
          <h3 className="text-4xl text-center w-40 text-in mb-2 ">
            {item.name}
          </h3>
          <p>{item.address}</p>
          {/* <FaBriefcaseMedical className="w-10  h-10" /> */}
          <p>{item.avalableDays}</p>
          <Link to={`/services/profile/serviceId:${item._id}`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              Explore
            </button>
          </Link>
        </div>
      ))}
      </div>
     
    </div>
  );
}

export default ServiceCards;
