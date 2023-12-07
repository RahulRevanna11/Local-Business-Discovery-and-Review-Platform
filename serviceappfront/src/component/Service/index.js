// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import download from "../../assets/download.jpeg";
// import Myservice from "./Myservice";
// import { useSelector } from "react-redux";
// import ImageBlock from "./ImageBlock";
// import RatingStar from "../common/RatingStar";
// import PreviousWork from "./PreviousWork/PreviousWork";

// const Services = () => {
//   const { service } = useSelector((state) => state.service);
//   const { loading: profileLoading } = useSelector((state) => state.profile)
//   const { loading: authLoading } = useSelector((state) => state.auth)

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }
//   if (!service) {
//     return <button>List Your service</button>;
//   }
//   return (
//     <div className="w-full">
//       <div className="flex justify-around items-center border-2 border-gray-300 gap-10 w-full rounded-2xl">
    
//         <div className="flex flex-col items-center">
//         <p className="text-xl  font-bold border-2 border-zinc-600 p-1">{service?.name}</p>
//           <RatingStar size={50} count={5} value={3} edit={false} />
//           <p className="bg-green-500 p-5 text-center rounded-2xl text-xl font-bold">
//             {service?.ratingAndReviews?.length} Reviews
//           </p>
//         </div>
//         <div className="border-x-2 border-gray-300 h-[100%] px-20 py-10 flex flex-col gap-6 items-center ">
//           <h1 className="text-xl font-bold p-4">Ratings</h1>

//           <div className="flex items-center gap-10 border-3 border-stone-500">
//             <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
//               10
//             </p>
//             <div>
            
//               <RatingStar size={25} count={5} value={5} edit={false} />
//             </div>
//           </div>

//           <div className="flex items-center gap-10 border-3 border-stone-500">
//             <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
//               10
//             </p>
//             <div>
//               {" "}
//               <RatingStar size={25} count={5} value={5} edit={false} />
//             </div>
//           </div>

//           <div className="flex items-center gap-10 border-3 border-stone-500">
//             <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
//               10
//             </p>
//             <div>
//               <RatingStar size={25} count={5} value={5} edit={false} />
//             </div>
//           </div>

//           <div className="flex items-center gap-10 border-3 border-stone-500">
//             <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
//               10
//             </p>
//             <div>
//               {" "}
//               <RatingStar size={25} count={5} value={5} edit={false} />
//             </div>
//           </div>

//           <div className="flex items-center gap-10 border-3 border-stone-500">
//             <p className="text-center bg-red-300 text-red-700 p-4 rounded-xl">
//               10
//             </p>
//             <div>
//               {" "}
//               <RatingStar size={25} count={5} value={5} edit={false} />
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto ">
//           <div className="  flex flex-col items-center gap-5 ">
//             <img src={download} className=" rounded-xl border shadow-xl"></img>
//             <p className="text-xl bg-blue-200 rounded-xl p-2">{service?.enquiry?.length} Enquiry</p>
//           </div>
//         </div>
//       </div>

//  { service&& <Myservice />}
//     {  service&&<ImageBlock />}
//     {  service&&<PreviousWork/>}
//     </div>
//   );
// };

// export default Services;
import { useNavigate } from "react-router-dom";
import React from "react";
import ReactStars from "react-rating-stars-component";
import download from "../../assets/download.jpeg";
import Myservice from "./Myservice";
import { useSelector } from "react-redux";
import ImageBlock from "./ImageBlock";
import RatingStar from "../common/RatingStar";
import PreviousWork from "./PreviousWork/PreviousWork";

const Services = () => {
  const { service } = useSelector((state) => state.service);
  const navigate = useNavigate();
  if(service===null)
  {
    return <button onClick={()=>(navigate('/dashboard/add-service'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
      Please Add your service
    </button>
  }
  return (
    <div className="w-full p-8">
      <div className="flex justify-center items-center gap-8 border-2 border-slate-400 p-6 rounded-2xl">
        <div className="flex flex-col items-center">
          <img src={download} className="rounded-xl border shadow-xl w-96 h-96" alt="Service Image" />
          <p className="text-xl bg-blue-200 rounded-xl p-2 mt-4">{service?.enquiry?.length} Enquiry</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold border-2 border-zinc-600 p-2">{service?.name}</p>
          <RatingStar size={50} count={5} value={3} edit={false} />
          <p className="bg-green-500 p-5 text-center rounded-2xl text-xl font-bold mt-4">
            {service?.ratingAndReviews?.length} Reviews
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className="flex items-center gap-6 border-3 border-stone-500 p-4 rounded-xl">
                <p className="text-center bg-red-300 text-red-700 rounded-xl p-4">{rating }</p>
                <RatingStar size={25} count={5} value={rating} edit={false} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Myservice />
      <ImageBlock />
      {/* <PreviousWork /> */}
    </div>
  );
};

export default Services;