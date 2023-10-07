import React, { useState, useEffect } from "react";
import './homeDiv4.css';
import axios from "axios";

function ServiceCards(props) {
  const [healthcareServiceIds, setHealthcareServiceIds] = useState([1,2,3,4,5]);

//   useEffect(() => {
//     axios.get('http://localhost:1000/servicesSubtype')
//       .then(response => {
//         const serviceSubtypes = response.data.find(item => item[props.serviceName]);

//         if (serviceSubtypes) {
//           const serviceTypes = serviceSubtypes[props.serviceName];
//           const ids = serviceTypes.map(service => service.id);
//           setHealthcareServiceIds(ids);
//         }
//       })
//       .catch(error => {
//         console.error('Axios error:', error);
//       });
//   }, [props.serviceName]);

  return (
    <div className="flex flex-row border-2 card-conatainer mt-4 rounded-xl bg-customBackground-100">
      {
        healthcareServiceIds.map((id) =>
             
         ( <div className="company-card transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-indigo-500/40 duration-300" key={id}>
            <h3 className="text-4xl text-center w-36 text-in mb-2 ">{id}</h3>
          </div>)
        )
      }
    </div>
  );
}

export default ServiceCards;