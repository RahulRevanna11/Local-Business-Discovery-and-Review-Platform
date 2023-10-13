// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import tatalogo from '../../assets/HomePage/tata.jpg';
// import { fetchCategories } from "../../services/oprerations/serviceAPIs";
// import './homeDiv2.css';
// import {Link} from "react-router-dom"
// function Div2() {
//     // const [allCategories,setCategries]=useState([]);
    
    
//     // //  let  response= await fetchCates

//     //     useEffect(()=> {
//     //         const getCategories = async() => {
//     //             const res = await fetchCategories();
//     //             // const category_id = 
//     //             // res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
//     //             setCategries(res?.data?.data);
//     //             console.log(res?.data?.data);
//     //         }
//     //         getCategories();
//     //     },[]);
//     //     console.log(allCategories)
//     // Local Port Json Server
//     // const companyData = 'http://localhost:1000/companies';

//     // const [data, setData] = useState([]);


//     useEffect(() => {
//         // axios.get(companyData)
//         //     .then((response) => {
//         //         setData(response.data);
//         //     })
//         //     .catch((error) => {
//         //         console.error('Error fetching data:', error.message);
//         //     });
//     }, []);

//     return (
//         <div className="max-h-max border-2 border-slate-400 m-3 p-4 flex flex-col relative rounded-lg">
//             <div className="company-container">
//                 <h3 className="company-title">Companies</h3>
//                 <div className="flex flex-wrap justify-center items-center max-h-max ">
                    
//                     {allCategories.map((comp) => (
//                         <Link to={`catagories/${comp._id}`}>
//                         <div key={comp.id} className="company-card">
//                             <img src={tatalogo} className="company-logo" alt="Company Logo" />
//                             <p className="company-name">{comp.name}</p>
//                             <p className="">{comp._id}</p>
                           
//                         </div>
//                         </Link>
//                     ))}

//                 </div>
//             </div>

//         </div>

//     )
// }

// export default Div2;