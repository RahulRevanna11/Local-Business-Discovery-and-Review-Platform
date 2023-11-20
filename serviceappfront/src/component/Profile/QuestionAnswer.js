import React from 'react'
import { useSelector } from 'react-redux'

const QuestionAnswer = ({data}) => {

  // const {service}=useSelector(state=>state.service);
  // console.log(service)
  return (

 
  <div className='p-2 mx-3 border-2 border-gray-200'>
    <h1 className='p-3 text-xl font-bold '>Question And Answer</h1>
    { data?.map((items,key)=>{
    return   <div key={key} className='p-2'>
     <p className='text-lg font-bold'><span className='text-bold'>{key+1}) </span>{items?.question}</p>
     <p>{items?.answer}</p>
     </div>
    })}
    </div>


  )
}

export default QuestionAnswer