import React from "react";
import './Profile.css';
function Profile() {
    return (
        <div>
            <main className="profile w-full">
                <div id="device-bar-1">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <header>
                    <div className="tb">
                        <a href="#">LOGO</a>
                        <input type="Search" placeholder="Search" name="Profile-search"></input>
                        <br />
                        <div style={{ width: "30px" }}></div>
                        <a href="#" className="text-xl ">Project</a>
                        <a href="#" className="text-xl">Reviews</a>
                        <a href="#" className="text-xl">Skills</a>
                    </div>
                </header>
                <div id="profile-upper">
                    <div id="profile-banner-image">
                        <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image" />
                    </div>
                    <div id="profile-d">
                        <div id="profile-pic">
                            <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg" alt="Profile pic" />
                        </div>
                        <div id="u-name">Himalaya Singh</div>
                    </div>
                    <div id="black-grd"></div>
                </div>
                <div id="main-content">
                    {/* ... (Continue with the rest of your HTML) */}
                </div>
                <div id="device-bar-2"><i className="fab fa-apple"></i></div>

                <div className="profile-div2">
                    <div className="profile-project pb-5">
                        <h3 className="font-bold text-xl ">PROJECT</h3>
                        <div className="profile-project-div">

                        </div>
                        <div className="profile-project-div">

                        </div>

                    </div>
                    <div className="profile-reviews pb-5 ">
                        <h3 className="font-bold text-xl">REVIEWS</h3>
                        <div className="profile-reviews-div">

                        </div>
                        <div className="profile-reviews-div">

                        </div>
                        <div className="profile-reviews-div">

                        </div><div className="profile-reviews-div">

                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Profile; 