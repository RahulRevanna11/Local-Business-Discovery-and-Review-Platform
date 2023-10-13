// import axios from "axios";
import icon from '../../assets/HomePage/education.png';
import React, { useState } from "react";
import { useEffect } from 'react';
import { fetchCategories } from '../../services/oprerations/serviceAPIs';
import { Link } from 'react-router-dom';
function Div3() {
    // const ServicesMeta = "http://localhost:1000/services";

    const [allCategories,setCategries]=useState([]);
    
    
    //  let  response= await fetchCates

        useEffect(()=> {
            const getCategories = async() => {
                const res = await fetchCategories();
                // const category_id = 
                // res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
                setCategries(res?.data?.data);
                console.log(res?.data?.data);
            }
            getCategories();
        },[]);
        console.log(allCategories)
    // const [errorMessage, setError] = useState('');

    // useEffect(() => {
    //     axios.get(ServicesMeta)
    //         .then((response) => {
    //             setServiceDiv(response.data);
    //         })
    //         .catch((error) => {
    //             setError('Error fetching data:', error.message);
    //         });
    // }, []);

    return (
        <div className="flex flex-wrap justify-center items-center gap-12 p-4 bg-customBackground-100 rounded-xl p-10">
            {
               allCategories.map((item) => (
                   <Link to={` catagory/${item.name}${item._id}`}  key={item.id}>
                    <div
                        key={item._id}
                        className="flex flex-col items-center border-2 border-slate-400 p-2 rounded-lg w-40 h-36 text-align: center"
                        // style={{ minWidth: "120px", maxWidth: "200px" }}
                    >
                        <div className="w-20 h-20 rounded-xl ">
                            <img src={icon} alt="Education" className="rounded-xl border-2 h-16 w-16 mx-3 mt-1" />
                        </div>
                        <p className='text-align: center'>{item.name}</p>
                        {/* <p className="text-center">{item._id}</p> */}
                    </div>
                    </Link>)) 
            }
        </div>
    );
}

export default Div3;