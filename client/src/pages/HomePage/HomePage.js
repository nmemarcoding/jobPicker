import React, { useState, useEffect } from 'react';
import Job from '../../components/Navbar/job/Job';
import Navbar from "../../components/Navbar/Navbar"
import "./HomePage.css"

const HomePage = () => {
    const [background,setBackground] = useState("https://images.unsplash.com/photo-1625225230517-7426c1be750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")
   
    return (
        <div className="h-screen m-2">
            <Navbar/>
            <div className="flex bg-gray-200 firstSection" style={{backgroundImage: `url(${background})`,

                                                                   }}>
                {/* left */}
                <div className="left-container">
                    <h className="search-title">
                    Find the perfect services for your needs
                    </h>
                    <div className="search_container">
                        <input type="search" placeholder="🔍   Try 'building mobile app'"  className="search-input"/>
                        <button className="search_btn">search</button>
                    </div>
                    <div className="pupular_container">
                        <div className="populer_sign">Pupular:</div>
                        <button className="popular_btn">Web Design</button>
                        <button className="popular_btn">WordPress</button>
                        <button className="popular_btn">Logo Design</button>
                        <button className="popular_btn">Video Editing</button>
                        

                    </div>

                </div>
                
            </div>
            <p className="populer_jobs">Popular professional services</p>
            <div className="flex   secondSection" >
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/196646094/original/989d6c2939c5304ec5b16a9771e35297a46502b1.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/234950499/original/c892880f0bc676832ef2ad8c6a1bf550be742056.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/160465966/original/da77e76b71fad7adde52ea42c9cf15e54cf40626.jpg" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/244455919/original/40c0b4a108b10b8f7cdcd0bf339c0ae1bf8b0aec.png" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/253640896/original/ad708986fde034dfb1f81d61ead2d0cbba84e84b.png" />
                </div>
                <div className="job">
                    <Job jobImg="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/152611507/original/cb954436e317ae584167b9c7bed86f67bd0feaaf.png" />
                </div>
            </div>
            <div className="flex bg-gray-200 thirdSection">
                <div></div>
            </div>
        </div>
    );
}

export default HomePage;
