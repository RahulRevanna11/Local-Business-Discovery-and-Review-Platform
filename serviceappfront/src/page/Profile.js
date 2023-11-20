import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProfileDescription from '../component/Profile/ProfileDescription';
import { fetchProfile } from '../services/oprerations/serviceAPIs';
import { apiConnector } from '../services/apiConnector';
import ProfileImages from '../component/Profile/ProfileImages';
import QuickInfo from '../component/Profile/QuickInfo';
import RatingAndReviers from '../component/Profile/RatingAndReviers';
import AboutUS from '../component/Profile/aboutUS';
import Navbar from '../component/common/Navbar';

import QuestionAnswer from '../component/Profile/QuestionAnswer';
import EnquireNow from '../component/Profile/EnquireNow';
import ConfirmationModal from '../component/Profile/ConfirmationModal';
import MapComponent from '../component/common/MapComponent';
import { useSelector } from 'react-redux';
const Profile = () => {
  const [confirmationModal, setConfirmationModal] = useState(null);
// const dispatch=useDispatchcon

const {latitude:lat,longitude:lng}=useSelector(state=>state.location)
const locations = [
  { latitude: 16.8424571877499, longitude: 74.5994821593478 ,name:"sangli"},

];
    const {serviceId}=useParams();
   console.log(serviceId);
  //  const 
  // const serviceId="a:s"
  const [about,setAbout]=useState("")
  const latitude = 37.7749; // Replace with your desired latitude
  const longitude = -122.4194;
  const [profileData,setProfileData]=useState(
    // {
    // name:'Urban Expert Service',
    // address:"Shop No 2, New Link Road, Borivali West, Mumbai - 400092 (Opp Infinity Mall and Dheeraj Gaurav Building)",
    // totalEnquires:80,
    // contactNo:"09845458106",
    //   about:" had a great experience with the AC repair and service team. They were quick to respond to my call and the technician arrived on time.",
    //   tag:["AC Repair & Services",
    //    " Refrigerator Repair & Services"],
    //    mode_of_payment:"cash,Debit Cards",
    //    avalableDays:"MON_SAT",
    //    year_of_establishment:"10"
    
  // }
  null
  )
    const getinfo=async()=>{
     const result=await apiConnector("POST",'http://localhost:4000/api/v1/service/get',{serviceId:serviceId.split(':')[1]});
   setProfileData(result?.data?.data);
   setAbout(result?.data?.data?.about)
     console.log(result);
    }
    useEffect(()=>{
getinfo();
    },[])

     
    console.log(`id in profile:${profileData}`);
   
  return (<div>
    {/* <Navbar/> */}
     <div className='lg:w-2/3 mx-auto  flex flex-col justify-center
    md:w-11/12 sm:w-11/12 bg-white lg:gap-10'>
      {/* <Navbar /> */}
      <ProfileDescription {...profileData}/>
       { profileData?.images&&<ProfileImages   images={profileData.images} />
    }
    <EnquireNow   
              />
            <button  onClick={() =>setConfirmationModal({
               
                btn1Text: "Logout",
                btn2Text: "Cancel",
                // btn1Handler: () => await ,
                btn2Handler: () => setConfirmationModal(null),
                id:profileData._id
              })
            }>
              Enquire Now
            </button>
    
    <QuickInfo {...profileData}/>
     {/* {serviceId} */}

    { profileData&&<RatingAndReviers  {...profileData}/>}
  
    {
      profileData&&about&&<AboutUS about={about}/>
    }
    <div className='w-100% h-72 m-3'>
    <h1 className='text-xl font-bold m-2'>Service Location</h1>
      {/* <MapComponent zoom={5}  locations={[{latitude:16.84,longitude:74.5987,name:"sangli"},{latitude:18.5204303,longitude: 73.8567437,name:"kupwad"}]} center={[16.04,745987]}/> */}
      <MapComponent locations={locations} zoom={16} height="300px" width="100%" center={[16.8424571877499, 74.5994821593478]}  youserLocation={{lat,lng}} />
    </div>

 {
    profileData?.questionAnswer&&
    <QuestionAnswer data={profileData?.questionAnswer}/>
    }
{
  // <MapComponent latitude={latitude} longitude={longitude}/>
}
    </div>
    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
  </div>
    
  )
}

export default Profile
