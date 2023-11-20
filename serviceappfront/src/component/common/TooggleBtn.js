import React, { useState } from 'react';

const ToggleBtn = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex items-center ">
      <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          checked={toggle}
          onChange={handleToggle}
          className="toggle-checkbox absolute block w-20  h-20 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <span
          className={`toggle-label block overflow-hidden h-30 rounded-full bg-gray-300 cursor-pointer ${toggle ? 'bg-green-500' : ''}`}
        ></span>
        <span
          className={`toggle-handle absolute left-0 top-0 transition transform translate-x-0 w-20 h-20 rounded-full bg-white border-4 cursor-pointer ${toggle ? 'translate-x-full border-green-500' : ''}`}
        ></span>
      </label>
      <span className="text-gray-700">{toggle ? 'On' : 'Off'}</span>
    </div>
  );
};

export default ToggleBtn;
