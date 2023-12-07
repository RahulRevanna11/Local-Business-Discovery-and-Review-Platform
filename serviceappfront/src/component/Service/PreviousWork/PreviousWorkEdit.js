import React, { useEffect, useState } from 'react';
import EditableField from './EditableField';
import { getProviousWork, updateProviousWork } from '../../../services/oprerations/serviceAPIs';
import { useSelector } from 'react-redux';
import { useNavigate } from 
"react-router";
const ProviousWorkEdit = ({props}) => {
  const [formData,setFormData ] = useState({
    completeDate: props.completeDate,
    OwnerContact: props.OwnerContact,
    address:props.address,
    cost:props.cost,
    OwnerName: props.OwnerName, // Non-editable field
  
  })
  const {token}=useSelector(state=>state.auth);
  const {service}=useSelector(state=>state.service);
  const [loading,setLoading]=useState(false);
  const Updatadata=async()=>{
setLoading(true);
formData.service=service._id;
formData.id=props._id;
const navigate=useNavigate();
if(!service)
  {
    return <button onClick={()=>(navigate('/dashboard/add-service'))} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full custom-btn mx-auto">
      Please Add your service
    </button>
  }
 

const data=await updateProviousWork(formData,token);

setLoading(false)

  }
//   useEffect(()=>{
//     
//     Updatadata();
// 
//   },[])
  const handleFieldChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    console.log(formData);
  };
  if(loading)
  return <div className='spinner'></div>

  return (
    <div className=" mx-auto mt-24 ">
      <form className="max-w-md mx-auto border-2 rounded-xl border-gray-400 p-6">
         {/* Non-editable field */}
         <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2">
           {formData.ownerName}
          </label>
        </div>
         {/* Non-editable field */}
         {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Owner Id
          </label>
          <input
            type="text"
            value={formData.ownerId}
            className="bg-gray-200 p-2 w-full"
            readOnly
          />
        </div> */}
        <EditableField
          label="Date"
          value={formData.completeDate}
          field="date"
          onChange={handleFieldChange}
        />
        <EditableField
          label="Owner Contact"
          value={formData.OwnerContact}
          field="ownerContact"
          onChange={handleFieldChange}
        />
        <EditableField
          label="Address"
          value={formData.address}
          field="address"
          onChange={handleFieldChange}
        />
        <EditableField
          label="Cost"
          value={formData.cost}
          field="cost"
          onChange={handleFieldChange}
        />
        <EditableField
          label="OwnerName"
          value={formData.OwnerName}
          field="OwnerName"
          onChange={handleFieldChange}
        />

       

        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
          onClick={Updatadata}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProviousWorkEdit;