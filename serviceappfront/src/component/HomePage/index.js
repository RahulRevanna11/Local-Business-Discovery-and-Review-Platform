import React from "react";
import Navbar from "../common/navbar";
import SearchBar from "./searchbar";
import Div1 from './homeDiv1'
import Div2 from "./homeDiv2";
import Div3 from "./homeDiv3";
import Div4 from "./homeDiv4";
// import Footer from './footer/footer'
import SearchCity  from './SearchCity'
function Home(){
    return(
        <div className="w-11/12 mx-auto bg-white flex flex-col gap-2">
        
        {/* <SearchBar />
         */}
         <SearchCity/>
         <Div1 />
        <Div3 />
        {/* <Div2 /> */}
        <Div4 /> 
         {/* <Footer /> */}
        </div>
    );
}

export default Home;