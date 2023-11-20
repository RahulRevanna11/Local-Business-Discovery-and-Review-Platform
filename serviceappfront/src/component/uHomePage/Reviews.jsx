// import React from "react";
// import "./HomePage.css";
// import review1 from '../../assets/images/review1.jpg';
// import review2 from '../../assetsimages/review2.jpg';
// import review3 from '../../assets/images/review3.jpg';
// import review4 from '../../assets/images/review4.png';
// import review5 from '../../assets/images/review5.jpg';
// import review6 from '../../assets/images/review6.jpg';

// const Reviews = () => {
//     return (
//         <>
//             <section class="reviewarea" id="testimonial">
//                 <h2 class="reviewtitle">Reviews & Rating</h2>
//                 <div class="reviewcontainer container">
//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I had an amazing dining experience at 'Hotel great Maratha'. The food was delicious, the service was impeccable, and the ambiance was perfect. I'll definitely be back!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review1}></img>
//                                 <p class="customername">Pooja Hegde</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I called 'PATIL Plumbres' for a plumbing emergency, and they arrived promptly and fixed the issue efficiently. Their service saved the day!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review2}></img>
//                                 <p class="customername">Joe Biden</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I always leave Orchid Unisex Salon feeling like a million bucks! The stylists are talented, and the salon is clean and inviting. I highly recommend it</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review3}></img>
//                                 <p class="customername">Alia Bhatt</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="reviewcontainer container">
//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I love my gym 'Redekar gym'! The trainers are knowledgeable, the equipment is top-notch, and the classes are fantastic. It's the perfect place to stay in shape.</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review4}></img>
//                                 <p class="customername">Rohit Sharma</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">The team at Shatau Hospital is dedicated and professional. They provide top-notch healthcare services, and I always feel well taken care of when I visit.</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review5}></img>
//                                 <p class="customername">Kiara Advani</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="reviewbox">
//                         <div class="reviewrating">
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                             <i>⭐</i>
//                         </div>
//                         <p class="reviewtext">I can't get enough of the coffee at Retro Cafe. It's the perfect place to unwind, and the baristas know how to make a mean cappuccino!</p>
//                         <div class="customer">
//                             <div class="customerimage">
//                                 <img src={review6}></img>
//                                 <p class="customername">Virat Kohli</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default Reviews;
import React from "react";
import "./HomePage.css";
import review1 from '../../assets/images/review1.jpg';
import review2 from '../../assets/images/review2.jpg';
import review3 from '../../assets/images/review3.jpg';
import review4 from '../../assets/images/review4.png';
import review5 from '../../assets/images/review5.jpg';
import review6 from '../../assets/images/review6.jpg';

const Reviews = () => {
    return (
        <>
            <section class="reviewarea font" id="testimonial">
                <h2 class="reviewtitle">Reviews & Rating</h2>
                <div class="reviewcontainer container">
                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">I had an amazing dining experience at 'Hotel great Maratha'. The food was delicious, the service was impeccable, and the ambiance was perfect. I'll definitely be back!</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review1}></img>
                                <p class="customername">Pooja Hegde</p>
                            </div>
                        </div>
                    </div>

                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">I called 'PATIL Plumbres' for a plumbing emergency, and they arrived promptly and fixed the issue efficiently. Their service saved the day!</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review2}></img>
                                <p class="customername">Joe Biden</p>
                            </div>
                        </div>
                    </div>

                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">I always leave Orchid Unisex Salon feeling like a million bucks! The stylists are talented, and the salon is clean and inviting. I highly recommend it</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review3}></img>
                                <p class="customername">Alia Bhatt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reviewcontainer container">
                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">I love my gym 'Redekar gym'! The trainers are knowledgeable, the equipment is top-notch, and the classes are fantastic. It's the perfect place to stay in shape.</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review4}></img>
                                <p class="customername">Rohit Sharma</p>
                            </div>
                        </div>
                    </div>

                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">The team at Shatau Hospital is dedicated and professional. They provide top-notch healthcare services, and I always feel well taken care of when I visit.</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review5}></img>
                                <p class="customername">Kiara Advani</p>
                            </div>
                        </div>
                    </div>

                    <div class="reviewbox">
                        <div class="reviewrating">
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                            <i>⭐</i>
                        </div>
                        <p class="reviewtext">I can't get enough of the coffee at Retro Cafe. It's the perfect place to unwind, and the baristas know how to make a mean cappuccino!</p>
                        <div class="customer">
                            <div class="customerimage">
                                <img src={review6}></img>
                                <p class="customername">Virat Kohli</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Reviews;