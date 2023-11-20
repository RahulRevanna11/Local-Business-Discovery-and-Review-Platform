import React, { useState } from 'react';

const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <nav className="w-100 border-2 border-slate-400 h-10 mt-5 flex justify-between items-center rounded-2xl mr-8 ml-8">
        <p className="ml-5 font-bold text-xl">Top Motor Training Schools in Mumbai</p>
        <button
          onClick={toggleSidebar}
          className="w-20 bg-blue-400 h-6 mr-8 rounded-lg text-center"
        >
          Filter
        </button>
      </nav>
      {isOpen && (
        <div className="absolute top-15 right-0 h-screen w-64 bg-white z-10 transform translate-x-0 transition-transform duration-300 ease-in-out">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Quick Filters</h2>
            <ul className="space-y-2">
              <li>Top Rated</li>
              <li>Quick Response</li>
              <li>Jd Verified</li>
              <li>Deals</li>
              <li>Jd Trust</li>
            </ul>
            <h2 className="text-lg font-bold mt-4">Sort By</h2>
            <ul className="space-y-2">
              <li>Relevance</li>
              <li>Rating</li>
              <li>Popular</li>
              <li>Distance</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOptions;