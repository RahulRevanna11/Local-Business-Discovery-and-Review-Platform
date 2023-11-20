import React, { useEffect, useState } from 'react';
import { EnquiryEndpoints } from '../../../services/apis';

import { useSelector } from 'react-redux';
import { apiConnector } from '../../../services/apiConnector';
import ServiceEnquireListCard from './ServiceEnquireListCard';
import PreviousWork from '../PreviousWork/PreviousWork';

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

    getData();
   },[])

   
  const sortedEnquires = enquires?.sort((a, b) => a.createdAt - b.createdAt);
  console.log(enquires);


if(loading)
return (<div className='spinner'></div>)
  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Service Enquires List</h2>
      <ul className="space-y-4">
        {sortedEnquires?.map((enquire, index) => (
      < ServiceEnquireListCard key={index} data={enquire}/>
        ))}
      </ul>
      <PreviousWork/>
    </div>
  );
};

export default ServiceEnquireList;
