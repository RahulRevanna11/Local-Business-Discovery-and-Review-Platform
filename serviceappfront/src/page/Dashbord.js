import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import Sidebar from "../component/Dashboard/SideBar"
import { useEffect } from "react"
import { fetchProfile } from "../services/oprerations/serviceAPIs"

function Dashboard() {
    
 const getData=async()=>{
  const data= await fetchProfile(user?.service);
    localStorage.setItem(data?.data?.data);
  }


  useEffect(()=>{
    if(user&&user?.accountType==='Business')
  {getData();

  }
  },[])
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading,user } = useSelector((state) => state.auth)

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

 

  return (
    <div className=" flex min-h-[calc(100vh-3.5rem)] mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard