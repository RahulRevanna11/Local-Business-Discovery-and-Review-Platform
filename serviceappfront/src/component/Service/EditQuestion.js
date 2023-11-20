import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Question from './Question';
import { useSelector } from 'react-redux';
import {createQuestionAnswer} from "../../services/oprerations/serviceAPIs"
import toast, { Toaster } from 'react-hot-toast';
const EditQuestion = ({data}) => {
    console.log(data);
const [info,setInfo]=useState({question:data?.question,answer:data?.answer})
const [isAdd,setAdd]=useState(false);
const {token}=useSelector(state=>state.auth)
const {service}=useSelector(state=>state.service)
const handleChange=(event)=>{
setInfo({...info,[event.target.name]:event.target.value})
console.log(info)

}

 const handleClick=()=>{
 setAdd(true);
 }
 const handleCancle=async(e)=>{
    
   setInfo ({question:data?.question,answer:data?.answer})
      setAdd(false);
   toast('Here is your toast.')
    }

     const handleSave=async(e)=>{
      const toastId = toast.loading("Loading...")
  await createQuestionAnswer(info.question,info.answer,service._id,token);
    setAdd(false);
  }
  return (
    
    <div className='my-10  gap-y-6 rounded-md border-[1px] border-richblack-700  p-8 px-12'>
      <h1 className='text-xl font-bold p-3'>Question and Answer</h1>
      
 {
    data?.map((item,key)=>{
        return <Question data={item} key={key}  index={key+1}/>
    })
 }

        <button  className={`bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-red-500${isAdd&&'hidden'}`} onClick={handleClick} > Add More Question And Answer</button>
   
     <div className={`${!isAdd&&'hidden'}`}>
     <input
        type="text"
        name="question"
        id="question"
        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-500 m-2"
      required={true}
     placeholder='Add your Question'
        onChange={handleChange}
        
      />
         <input
        type="text"
        name="answer"
        id="answer"
        placeholder='Add the Answer here'
        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-500 m-2"
      
       value={info?.answer}
        rows="2" cols="50"
     
        onChange={handleChange}
      />
   
     </div>
     <div className={`${!isAdd&&'hidden'} mb-3 `}>

<button className="p-2 text-lg font-bold bg-orange-300 rounded-lg mx-3" onClick={handleSave}>Add</button>
<button  className="p-2 text-lg font-bold bg-blue-300 rounded-lg mx-3" onClick={handleCancle} >Cancle</button>
</div>

    
    </div>
  )
}

export default EditQuestion