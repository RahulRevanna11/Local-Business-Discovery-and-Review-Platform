import React from 'react'
import { useState } from 'react';
import SubCategory from './SubCategory';
import { Link } from 'react-router-dom';
const ShowServices = (props) => {
    // console.log(props);
  const [services,setServices]=useState(props?.item.service);
  console.log(services);
 
  return (
    <div  >

    {

services.map((item,key)=>{
return <Link   to={`/services/profile/serviceId:${item._id}`}><SubCategory data={item} /></Link>
})
    }
    
    </div>
  )
}

export default ShowServices