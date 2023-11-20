import React from "react";
// import searchIcon from "./Image/searchIcon.jpg";

function SearchBar() {
    return (
        <div className="h-10 border-2 border-slate-400 m-3 border-radius- p-1 flex space-x-0.5 z-20">
            <div className="ml-10 h-10 w-40 flex justify-center">
                {/* <img className="h-7 mb-1" src={searchIcon} alt="S" /> */}
                <input className=" w-40 h-5 ml-2 align-center rounded-sm mt-1 pl-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " type="text" placeholder="Search" />
            </div>
            <div className="flex-row-reverse flex w-full space-x-0.5
            ">
                <div className="ml-2">
                    <i className="fas fa-search text-blue-500"></i> Menu
                </div>
                <div className="ml-2">
                    <i className="fas fa-user text-blue-500">Notification</i>
                </div>
                <div className="ml-2">
                    <i className="fas fa-comments text-blue-500">Menu</i>
                </div>
                <div className="ml-2">
                    <i className="fas fa-bell text-blue-500">UserIcon</i>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;