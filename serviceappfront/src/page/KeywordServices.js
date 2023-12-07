import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SearckKeyword } from '../services/oprerations/serviceAPIs';
import { service } from '../services/apis';
import HorizontalCard from '../component/ServiceProviderList/SubCategory';
import { Link } from 'react-router-dom';


const KeywordServices = () => {
    var { keyword,lat,lng } = useParams();
    lat=lat.split(":")[1];
    lng=lng.split(":")[1];
    lng=parseInt(lng)
    lat=parseInt(lat)
console.log(lat+lng);

  const [services, setServices] = useState([]);
  const [loading,setLoading]=useState(false);
  keyword=keyword.toLowerCase()
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
            const dLat = (lat2 - lat1) 
            const dLng = (lng2 - lng1) 
            
            return dLat*dLat+dLng*dLng;
          }
        //  if(ServiceList.length>0&&lat&&lng)
        //   {
            ServiceList.sort((a, b) => {
              
                const distanceA = calculateDistance(lat, lng, a.latitude, a.longitude);
                const distanceB = calculateDistance(lat, lng, b.latitude, b.longitude);
              console.log(`${a.name}  ${distanceA}`);
              console.log(`${b.name}  ${distanceB}`);
                 return distanceA - distanceB;
              });
              console.log("sorting");
          // }

          console.log(ServiceList);
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
    <div className='mt-28'>
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
