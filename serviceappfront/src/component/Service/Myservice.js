import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../common/IconBtn";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../services/oprerations/serviceAPIs";

export default function MyProfile() {

  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.auth);
  // const { service } = useSelector((state) => state.service);
  const [serviceloading,setLoading]=useState(false);
  const[service,setService]=useState(null);
  const getData=async()=>{
    setLoading(true);
    const responce=await fetchProfile(user?.service,true);
    if(responce&&responce?.data?.data)
    setService(responce?.data?.data);

    setLoading(false)
    
  }
  
  useEffect(()=>{
  getData();
  },[])
  const navigate = useNavigate();
  console.log(service);
  if (service?.length===0) {
    return <button className="mt-16">List Your service</button>;
  }
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
 
  if(serviceloading)
  return <div className="spinner"></div>
  if(!service)
  {
    <p>Please Add the Service</p>
  }
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Service Details
      </h1>
      {/* <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }} */}
      {/* >
          <RiEditBoxLine />
        </IconBtn>
      </div> */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">Name</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/editservice");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            service?.name ? "text-richblack-5" : "text-richblack-400"
          } text-lg font-medium`}
        >
          {service?.name ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/editservice");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Address</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.address}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">AvailableDays</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.avalableDays}
              </p>
            </div>
            2
            <div>
              <p className="mb-2 text-sm text-richblack-600">Mode of Payment:</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.mode_of_payment ?? "Add Mode of Payment"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Address</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.address}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">tags</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.tags}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.mobile ?? "Add Contact Number"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm text-richblack-600">GSTIN</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.GSTIN ?? "Add GSTIN"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-sm text-richblack-600">LandMark</p>
              <p className="text-sm font-medium text-richblack-5">
                {service?.landMark ?? "Add LandMark"}
              </p>
            </div>
            {/* <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {/* {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"} 
              </p> 
            </div>*/}
          </div>
        </div>
        
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/editservice");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            service?.name ? "text-richblack-5" : "text-richblack-400"
          } text-lg font-medium`}
        >
          {service?.about ?? "Write Description  About Your Bussiness"}
        </p>
      </div>
    </>
  );
}
