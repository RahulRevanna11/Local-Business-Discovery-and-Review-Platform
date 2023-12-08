import icon from '../../assets/HomePage/education.png';
import React, { useState } from "react";
import { useEffect } from 'react';
import { fetchCategories } from '../../services/oprerations/serviceAPIs';
import { Link } from 'react-router-dom';
function HomeDiv3() {
    // const ServicesMeta = "http://localhost:1000/services";

    const [allCategories,setCategries]=useState([]);
    
    
    //  let  response= await fetchCates

        useEffect(()=> {
            const getCategories = async() => {
                const res = await fetchCategories();
                // const category_id = 
                // res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
                if(res&&res?.data)
                setCategries(res?.data?.data);
                // console.log(res?.data?.data);
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

    return (<div className='mt-12'>
        <h3 className='text-3xl font-bold text-slate-500 text-center '>Category</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 p-4 bg-customBackground-100 rounded-xl p-10 mt-5">
            {
               allCategories.map((item) => (
                   <Link to={`category/:${item.name}/:${item._id}`}  key={item.id}>
                    <div
                        key={item._id}
                        className="flex flex-col items-center border-2 border-slate-400 p-2 rounded-lg w-40 h-40 text-align: center gap-1"
                        // style={{ minWidth: "120px", maxWidth: "200px" }}
                    >
                        <div className="w-28 h-24 rounded-xl ">
                            <img src={item.image} alt="Education" className="rounded-xl border-2 h-24 w-28  mt-1" />
                        </div>
                        <p className='text-align: center'>{item.name}</p>
                        {/* <p className="text-center">{item._id}</p> */}
                    </div>
                    </Link>)) 
            }
        </div>
        </div>
    );
}

export default HomeDiv3;