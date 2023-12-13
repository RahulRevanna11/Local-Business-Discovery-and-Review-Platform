import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Dashboard/SideBar";
import { fetchProfile } from "../services/oprerations/serviceAPIs";
import { GrMenu } from 'react-icons/gr';

function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getData = async () => {
    const data = await fetchProfile(user?.service);
    localStorage.setItem(data?.data?.data);
  };

  useEffect(() => {
    if (user && user?.accountType === "Business") {
      getData();
    }
  }, []);

  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading, user } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] mt-20">
      {isSmallScreen && (
        <button className="h-8 w-8 z-[11] bg-slate-400  absolute text-sm ml-[1rem] rounded-[50%] " onClick={toggleSidebar}>
          {/* {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"} */}
          <GrMenu className="menu-icon text-2xl text-gray-600 ml-[3px]" />
        </button>
      )}
      <div className={isSmallScreen && !isSidebarVisible ? "hidden" : `  ${isSmallScreen?'absolute z-10 ':'block'}`}>
        <Sidebar  />
      </div>
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        {!isSidebarVisible && <div className="h-9"/>}
        <div className="mx-auto w-11/12 max-w-[1000px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
