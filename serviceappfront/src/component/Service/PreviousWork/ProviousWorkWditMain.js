import React, { useEffect, useState } from 'react';
import { getProviousWork } from '../../../services/oprerations/serviceAPIs';
import { useSelector } from 'react-redux';
import PreviousWorkEdit from './PreviousWorkEdit';
import {useNavigate} from 'react-router-dom'
const ProviousWorkWditMain = () => {
    const {token}=useSelector(state=>state.auth);
    const {service}=useSelector(state=>state.service);
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
    const navigate=useNavigate();
   
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
   
    if(!service )
    {
      return <button onClick={()=>(navigate('/dashboard/add-service'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
        Please Add your service
      </button>
    }
    if(data?.length===0)
    {
      return <button onClick={()=>(navigate('/dashboard/AddPast-Work'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
        Please Add your Past work
      </button>
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
