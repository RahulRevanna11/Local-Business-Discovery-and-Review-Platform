import React from "react";
import Card from "./Card"
function HDiv1() {
    return (
        <div className="min-h-max border-2 border-slate-400 m-3 flex flex-col sm:flex-row rounded-xl
        md:flex-row">
            <div className="sm:w-1/2 w-full sm:m-3 mt-3 sm:mt-12">
                <div className="font-bold text-2xl p-2 mt-8 ml-10">
                    Connecting Individuals, Institutions, Employers
                </div>
              
                <p className="p-5 pt-0 mt-10 text-justify text-xl">
                    Unlock global opportunities to enhance your talents, collaborate with top institutions, boost your credentials, and secure your dream job or contract
                </p>
            </div>
            {/* <div className="
             sm:w-1/2 w-full grid grid-cols-3 gap-4 sm:grid-cols-3 place-content-center sm:p-3 p-1 md:grid-cols-3
            "> */}
            <div className="
            sm:w-1/2 w-full grid grid-cols-3 gap-4 sm:grid-cols-3 place-content-center sm:p-3 p-1 md:grid-cols-3
            ">
                {/* <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    Services
                </div> */}
                <Card title={"service"}/>
                <Card title={"service"}/>
                <Card title={"service"}/>
                <Card title={"service"}/>
                <Card title={"service"}/>
                <Card title={"service"}/>
                
                {/* <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    Blog
                </div>
                <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    Tender
                </div>
                <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    Recent Activity
                </div>
                <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    Popular
                </div>
                <div className="border-2 border-slate-400 h-48 w-36 rounded-xl p-2 text-center font-semibold">
                    User Reviews
                </div> */}
            </div>
        </div>
    );
}

export default HDiv1;