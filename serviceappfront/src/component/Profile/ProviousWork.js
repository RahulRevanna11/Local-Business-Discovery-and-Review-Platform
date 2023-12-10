import React, { useState } from "react";
import { useSelector, useEffect } from "react";
import { getProviousWork } from "../../services/oprerations/serviceAPIs";
const ProviousWork = ({ serviceId }) => {
  const { token } = useSelector((state) => state.auth);

  const { loading: AuthLoading } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const setData = async () => {
      var data = null;
      if (serviceId)
        data = await getProviousWork({ service: serviceId }, token);
      setData(data);
    };
    setData();
  }, []);
  if (loading || AuthLoading || !data) return <div></div>;
  return (
    <div>
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






      {/* add code here */}
    </div>
  );
};

export default ProviousWork;
