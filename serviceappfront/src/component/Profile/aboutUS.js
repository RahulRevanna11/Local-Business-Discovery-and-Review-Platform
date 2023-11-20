import React, { useEffect, useState } from "react";

const AboutUS = ({ about }) => {
  console.log(typeof about);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (about.length > 100) setOpen(true);
  }, []);

  return (
    <div className="border-2 border-gray-200 mx-4 p-4" >
      <h1 className="text-lg font-bold">About Us</h1>

      {about.length > 100 && open ? (
        <p >
          {about.substr(1,200)}
          <span onClick={() => setOpen(false)} className="text-red-500 cursor-pointer"> read more</span>
        </p>
      ) : (
        <p>
          {about} <span   className="text-red-500 cursor-pointer"onClick={() => setOpen(true)}> read less</span>
        </p>
      )}
      {about.length <= 100 && <p>{about}</p>}
    </div>
  );
};

export default AboutUS;
