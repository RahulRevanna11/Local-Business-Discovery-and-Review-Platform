import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs";
import Home from "./component/HomePage";
import Profile from "./page/Profile";
import Login from "./page/Login";
import Navbar from "./component/common/navbar";
import Dashbord from "./page/Dashbord";
import MyProfile from "./component/Dashboard/MyProfile";
import RateService from "./page/RateService";
import ServiceProviders from "./page/serviceProviderList";
import Settings from "./component/Settings/index.js";
import Service from "./component/Service/index";
import EditService from "./component/Service/EditService.js"
import ServiceEnquireList from "./component/Service/Inquire/ServiceInquireList.js";
import UHomePage from "./page/UHomePage.jsx";
import AddService from "./component/Service/AddService.js";
import OpenRoute from "./component/Auth/OpenRoute.js";
import PrivateRoute from "./component/Auth/PrivateRoute.js";
import VerifyEmail from "./page/VerifyEmail.js";
import Signup from "./page/Signup.js";
import ForgotPassword from "./page/ForgotPassword.js";
import MapComponent from "./component/common/MapComponent.js";
import KeywordServices from "./page/KeywordServices.js";
import UserEnquireList from  "./component/Service/Inquire/UserEnquireList.js"
import PreviousWork from "./component/Service/PreviousWork/PreviousWork.js";
import Footer from "./component/common/Footer.js";
function App() {
  const locations = [
    { name: 'San Francisco', latitude: 37.7749, longitude: -122.4194 },
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  ];
  return (
    <div>
      <Navbar />
      <MapComponent locations={locations}/>
      <Routes>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={<Home/>} />
        <Route
          path="/services/profile/:serviceId"
          element={<Profile />}
        ></Route>
       <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />  

      <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />  

<Route
          path="/addRating/:serviceId/:image/:name"
          element={<RateService />}
        >
          </Route>
        <Route element={<Dashbord />}>
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
       <Route  path="/dashboard/editservice" element={<EditService/>}/>
       
          <Route path="/dashboard/settings" element={<Settings />} />
           <Route path="/dashboard/my-services" element={<Service />} />
          <Route path="/dashboard/Inquiry" element={<ServiceEnquireList />} />
          <Route path="/dashboard/add-service" element={<AddService/>} />
          <Route path="/dashboard/previous-work" element={<PreviousWork/>} />

          <Route path="/dashboard/InquiryStatus" element={<UserEnquireList/>} />
          </Route>
        <Route
          path="/category/:categoryName/:categoryid"
          element={<ServiceProviders />}
        />
         <Route
          path="/search/:keyword/:lat/:lng"
          element={<KeywordServices />}
        />
  <Route path="*" element={<div> Not Found</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
