import React, { useEffect, useState } from 'react';
import { EnquiryEndpoints } from '../../../services/apis';

import { useSelector } from 'react-redux';
import { apiConnector } from '../../../services/apiConnector';
import ServiceEnquireListCard from './ServiceEnquireListCard';
import PreviousWork from '../PreviousWork/PreviousWork';
import {  useNavigate } from "react-router-dom";
const ServiceEnquireList = () => {
  const [loading,setLoading]=useState(false);
const {GET_ENQUIRY_API}=EnquiryEndpoints;
    const {service}=useSelector(state=>state.service)
    const {token}=useSelector(state=>state.auth)
    console.log(service);

const [enquires,setEnquires]=useState(null);
   useEffect(()=>{
    setLoading(true);
    const getData=async()=>{
    const result= await apiConnector('POST',GET_ENQUIRY_API,{serviceId:service._id},{
        Authorization: `Bearer ${token}`
      })
console.log(result);
      setEnquires(result.data.data)
      setLoading(false);
    }

    if(service)
    getData();
   },[])

   const navigate=useNavigate();
  const sortedEnquires = enquires?.sort((a, b) => a.createdAt - b.createdAt);
  console.log(enquires);

if(!service)
{
  return <button onClick={()=>(navigate('/dashboard/add-service'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
    Please Add your service
  </button>
}
if(loading)
return (<div className='spinner'></div>)
  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4">Service Enquires List</h2>
      <ul className="space-y-4">
        {sortedEnquires?.map((enquire, index) => (
      < ServiceEnquireListCard key={index} data={enquire}/>
        ))}
      </ul>
      {/* <PreviousWork/> */}
    </div>
  );
};

export default ServiceEnquireList;
