// import { useRef, useState } from "react"
// import { AiOutlineCaretDown } from "react-icons/ai"
// import { VscDashboard, VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useNavigate } from "react-router-dom"

// import useOnClickOutside from "../../hooks/useOnClickOutside"
// import { logout } from "../../services/oprerations/authAPI";

// export default function ProfileDropdown() {
//   const { user } = useSelector((state) => state.profile)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [open, setOpen] = useState(false)
//   const ref = useRef(null)

//   useOnClickOutside(ref, () => setOpen(false));
//   if (!user) return null
// console.log("inside dropdown");
//   return (
//     <button className="relative" onClick={() => setOpen(true)}>
//       <div className="flex items-center gap-x-1 w-20">
//         <img
//           src={user?.image}
//           alt={`profile-${user?.firstName}`}
//           className="aspect-square lg:w-[50px]  
//           md:w-[40px]
//           rounded-full object-contain"
//         />
//         <AiOutlineCaretDown className="text-sm text-gray-100" />
//       </div>
//       {open && (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-black overflow-hidden rounded-md border-[1px] border-black bg-richblack-800"
//           ref={ref}
//         >
//           <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
//             <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
//               <VscDashboard className="text-lg" />
//               Dashboard
//             </div>
//           </Link>
//           <div
//             onClick={() => {
//               console.log("inside onclick lonout")  ;
//               navigate('/')
//               dispatch(logout(navigate))
//               setOpen(false)
            
//             }}
//             className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          
//           >
//             <VscSignOut className="text-lg" />
//             Logout
//           </div>
//         </div>
//       )}
//     </button>
      
//   )
// }


import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logout } from "../../services/oprerations/authAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <button className="relative text-lg font-normal " onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-2 w-20"> {/* Increased the width */}
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square lg:w-[50px] md:w-[40px] h-10 rounded-full object-contain"
        />
        <AiOutlineCaretDown className="text-xl text-gray-100" /> {/* Increased the text size */}
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-black overflow-hidden rounded-md border-[1px] border-black bg-blue-800 w-43 bg-cyan-300" 
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-2 py-2 px-4 text-base text-richblack-100 hover:bg-blue-700 hover:text-white">
              <VscDashboard className="text-2xl" /> {/* Increased the text size */}
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              console.log("inside onclick lonout");
              navigate('/');
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-2 py-2 px-4 text-base text-richblack-100 hover:bg-blue-700 hover:text-white"
          >
            <VscSignOut className="text-2xl" /> {/* Increased the text size */}
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
