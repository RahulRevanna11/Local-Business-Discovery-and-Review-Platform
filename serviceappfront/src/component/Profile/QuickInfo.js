import React from "react";

const QuickInfo = (props) => {
  return (
    <div className="flex flex-col gap-4 border-slate-200 border-2 m-4 p-2">
      <p className="text-lg ">Quick Information</p>
      <div className="flex justify-around">
        <div>
            <p className="text-md text-gray-500">Mode of Payment</p>
          <p className="text-lg font-bold">
            {/* {(props?.mode_of_payment &&
            //   props?.mode_of_payment.map((mode, i) => {
            //     return <p key={i}>mode</p>;
              })) || <p>cash</p>} */}
              Cash
          </p>
        </div>
        
        <div>
          {" "}
          <p className="text-md text-gray-500">Year of Establishment</p>
          <p className="text-lg font-bold">
            {(props?.year_of_establishment && (
              <p>{props?.year_of_establishment}</p>
            )) || <p>2023</p>}
          </p>
        </div>

        <div>
            <p className="text-md text-gray-500">Avaliable Days</p>
        <p className="text-lg font-bold"> {(props?.avalableDays && <p>{props?.avalableDays}</p>) || (
            <p className="text-lg font-bold" >Mon-Sat</p>
          )}</p> 
        </div>

        {
         props?.GSTIN&&  <div>
           <p className="text-md text-gray-500">GSTIN</p>
       <p className="text-lg font-bold"> {(props?.GSTIN && <p>{props?.GSTIN}</p>) || (
           <p className="text-lg font-bold" >Mon-Sat</p>
         )}</p> 
       </div>
        }
        {props?.GSTIN&&<div>
            
        <p className="text-lg font-bold"> {(props?.GSTIN && <p>GSTIN</p>) || (
            <p className="text-lg font-bold" >{props.GSTIN}</p>
          )}</p> 
        </div>}
      </div>
    </div>
  );
};

export default QuickInfo;
