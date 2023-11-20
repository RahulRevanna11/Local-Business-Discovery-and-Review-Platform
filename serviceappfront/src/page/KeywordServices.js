import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SearckKeyword } from '../services/oprerations/serviceAPIs';
import { service } from '../services/apis';
import HorizontalCard from '../component/ServiceProviderList/SubCategory';
import { Link } from 'react-router-dom';


const KeywordServices = () => {
    var { keyword,lat,lng } = useParams();
  const [services, setServices] = useState([]);
  const [loading,setLoading]=useState(false);
  // keyword=keyword.toLowerCase()
  console.log(keyword.toLowerCase())
   keyword=keyword.split(":")[1].split(" ");
  const getServicesByKeyword=async(keyword)=>{
    const res=await  SearckKeyword(keyword);
    console.log(res)
      const ServiceList=[];
      res?.map((item)=>{
        item?.service?.map((services)=>{
ServiceList?.push(services);
        })
        function calculateDistance(lat1, lng1, lat2, lng2) {
            const R = 6371; // Radius of the Earth in kilometers
            const dLat = (lat2 - lat1) * (Math.PI / 180);
            const dLng = (lng2 - lng1) * (Math.PI / 180);
            const a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) *
                Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // Distance in kilometers
            return distance;
          }
         if(ServiceList.length>0&&lat&&lng)
          {
            ServiceList?.sort((a, b) => {
                const distanceA = calculateDistance(lat, lng, a.latitude, a.longitude);
                const distanceB = calculateDistance(lat, lng, b.latitude, b.longitude);
                return distanceA - distanceB;
              });
          }

        setServices(ServiceList);
      })

  }
useEffect(()=>{

setLoading(true);
getServicesByKeyword(keyword);
setLoading(false);

},[]);

if(loading)
return <div className='spinner'></div>

  return (
    <div className='mt-20'>
      {
        services.map((data,index)=>{
            return<Link to={`/services/profile/serviceId:${data._id}`}><HorizontalCard data={data}key={index}/>
            </Link> 
        })
      
      }
    </div>
  )
}

export default KeywordServices
