import React, { useEffect, useState } from 'react';
import { getProviousWork } from '../../../services/oprerations/serviceAPIs';
import { useSelector } from 'react-redux';
import PreviousWorkEdit from './PreviousWorkEdit';

const ProviousWorkWditMain = () => {
    const {token}=useSelector(state=>state.auth);
    const {service}=useSelector(state=>state.service);
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
   
    const getdata=async()=>{
  
      var data=null;
      if(service)
      data=await getProviousWork({service:service._id},token);
    setData(data);
  
  
    }
    useEffect(()=>{
      service&&setLoading(true);
  getdata();
  setLoading(false)
    },[])
  
    
    if(loading)
    return <div className='spinner'></div>
    if (!service||service?.length===0) {
      return <button>List Your service</button>;
    }
  return (
    <div className='flex  flex-wrap'>
      {
        data&&data.map((items,index)=>{
            return <PreviousWorkEdit key={index} props={items} />
        })
      }
    </div>
  )
}

export default ProviousWorkWditMain
