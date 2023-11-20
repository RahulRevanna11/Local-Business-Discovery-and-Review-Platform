import React, { useEffect, useState } from 'react';
// import { EnquiryEndpoints } from '../../../services/apis';

import { useSelector } from 'react-redux';
// import { apiConnector } from '../../../services/apiConnector';
import ServiceEnquireListCard from './ServiceEnquireListCard';
import { getUserInquiry } from '../../../services/oprerations/serviceAPIs';

const UserEnquireList = () => {
// const {GET_ENQUIRY_API}=EnquiryEndpoints;
    const {service}=useSelector(state=>state.service)
    const {token}=useSelector(state=>state.auth)
    console.log(service);
const [enquires,setEnquires]=useState(null);
   useEffect(()=>{
    const getData=async()=>{
    const result= await getUserInquiry(token);
    setEnquires(result)
    }

    getData();
   },[])

   
  const sortedEnquires = enquires?.sort((a, b) => a.createdAt - b.createdAt);
  console.log(enquires);



  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Service Enquires List</h2>
      <ul className="space-y-4">
        {sortedEnquires?.map((enquire, index) => (
      < ServiceEnquireListCard key={index} data={enquire}/>
        ))}
      </ul>
    </div>
  );
};

export default UserEnquireList;
