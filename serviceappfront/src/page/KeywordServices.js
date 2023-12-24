import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { SearckKeyword } from '../services/oprerations/serviceAPIs';
import { service } from '../services/apis';
import HorizontalCard from '../component/ServiceProviderList/SubCategory';
import { Link } from 'react-router-dom';


const KeywordServices = () => {
  var { keyword, lat, lng } = useParams();
  lat = parseFloat(lat.split(":")[1]);
  lng = parseFloat(lng.split(":")[1]);
  
  console.log(lat + lng);
  
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  
  keyword = keyword.toLowerCase();
  const keywordParts = keyword.split(":")[1].split(" ");
  
  const getServicesByKeyword = async (keyword) => {
    const res = await SearckKeyword(keyword);
    console.log(res);
  
    const ServiceList = [];
  
    res?.forEach((item) => {
      item?.service?.forEach((service) => {
        ServiceList.push(service);
      });
  
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in kilometers
  
        // Convert latitude and longitude from degrees to radians
        const radLat1 = toRadians(lat1);
        const radLon1 = toRadians(lon1);
        const radLat2 = toRadians(lat2);
        const radLon2 = toRadians(lon2);
  
        // Calculate the change in coordinates
        const dLat = radLat2 - radLat1;
        const dLon = radLon2 - radLon1;
  
        // Haversine formula
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
  
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
        // Distance in kilometers
        const distance = R * c;
  
        return distance;
      }
  
      function toRadians(degrees) {
        return degrees * (Math.PI / 180);
      }
  
      if (ServiceList.length > 0 && lat && lng) {
        ServiceList.sort((a, b) => {
          const distanceA = calculateDistance(lat, lng, a.latitude, a.longitude);
          const distanceB = calculateDistance(lat, lng, b.latitude, b.longitude);
  
          console.log(`${a.name} ${distanceA}`);
          console.log(`${b.name} ${distanceB}`);
  
          return distanceA - distanceB; // Fix the sorting logic
        });
  
        console.log("sorting");
      }
  
      console.log(ServiceList);
      setServices(ServiceList);
    });
  };
useEffect(()=>{

setLoading(true);
getServicesByKeyword(keywordParts);
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
