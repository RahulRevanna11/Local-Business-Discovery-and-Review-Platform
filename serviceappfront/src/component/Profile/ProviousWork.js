import React, { useState } from "react";
import {  useEffect } from "react";
import { getProviousWork } from "../../services/oprerations/serviceAPIs";
import {useSelector} from 'react-redux'
const ProviousWork = ({ serviceId }) => {
  const { token } = useSelector((state) => state.auth);

  const { loading: AuthLoading } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fun = async () => {
      setLoading(true);
      var res = null;
      if (serviceId)
        res = await getProviousWork({ service: serviceId }, token);
      console.log(res);
      setData(data);
      setLoading(false);
    };
    fun();
  }, []);
  if (loading ) return <div className="spinner"></div>;
  return (
    <div className="p-2 mx-3 border-2 border-gray-200 mt-10">
      {/*  


 OwnerName:{
        type:String
     },

     completeDate:{
       type:Date,
     }, 
     
     OwnerContact:{
        type:String,
        trim:true
     },

     address:{
        type:String,
        
     },
     cost:{
        type:Number
     },
     Images:[{
        type:String
     }],

    //*******array of string ******
    service:[{
        type:mongoose.Schema.Types.ObjectId,
                
        ref:"Service"
     }],*/}



provious work
fyyyyyyyyyyyyyyy
      {/* add code here */}
    </div>
  );
};

export default ProviousWork;
