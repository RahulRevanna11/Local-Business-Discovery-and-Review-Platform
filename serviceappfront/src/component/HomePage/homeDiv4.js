import React from "react";
import { useState, useEffect } from "react";
// import './homeDiv4.css';
import icon from "../../assets/HomePage/tata.jpg"
import axios from "axios";
import ServiceCards from "./serviceDiv";
import { fetchAllSubCategoriesServices } from "../../services/oprerations/serviceAPIs";
import { apiConnector } from "../../services/apiConnector";
function Div4() {

    // const ServicesMeta = "http://localhost:1000/services";

    const [serviceDiv, setServiceDiv] = useState([]);
    // const [errorMessage, setError] = useState('');

    useEffect(() => {
     const getAllSubCatagory=async ()=>{
         const r= await fetchAllSubCategoriesServices(); setServiceDiv(r.data.data);

      }
       getAllSubCatagory();
     
    //   console.log(`all subcategory: ${result}`)
    }, []);
        console.log(serviceDiv);
    return (
        <div>
             
               <div className=" border-2 border-slate-400 m-3 p-4  rounded-lg grid-col-3 " >
                   
                    <div className="items-center max-h-max flex w-full justify-center">
                      
{/* {
                  serviceDiv.length>0&&  <div className="p-20">
                   <div className="flex">
                 <ServiceCards  subcategory={serviceDiv[0]} />
                    <ServiceCards  subcategory={serviceDiv[0]} />
                    </div>
                    <div className="flex"> <ServiceCards  subcategory={serviceDiv[0]} />
                    <ServiceCards  subcategory={serviceDiv[0]} />
                    </div>
  
                    

                        </div>
} */}


                    </div>
                </div>



        
           
        
        </div>
    )

    
}

export default Div4;