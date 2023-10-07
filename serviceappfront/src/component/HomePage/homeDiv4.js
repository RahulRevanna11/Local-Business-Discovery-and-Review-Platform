import React from "react";
import { useState, useEffect } from "react";
import './homeDiv4.css';
import icon from "../../assets/HomePage/tata.jpg"
import axios from "axios";
import ServiceCards from "./serviceDiv";

function Div4() {

    // const ServicesMeta = "http://localhost:1000/services";

    const [serviceDiv, setServiceDiv] = useState([{id:1},{id:2},{id:3},{id:4}]);
    // const [errorMessage, setError] = useState('');

    // useEffect(() => {
    //     axios.get(ServicesMeta)
    //         .then((response) => {
    //             setServiceDiv(response.data);
    //         })
    //         .catch((error) => {
    //             setError('Error fetching data:', error.message);
    //         });
    // }, []);

    return (
        <div>{

            serviceDiv.map((item) => (
                <div className="max-h-max border-2 border-slate-400 m-3 p-4  rounded-lg grid-col-3 " key={item.id}>
                    <h1 className="font-semibold text-3xl ml-10">{item.id}</h1>
                    <div className="items-center max-h-max flex w-full justify-center">

                        <ServiceCards  />

                    </div>
                </div>
            ))


        }
        </div>


    );
}

export default Div4;