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
                        Find The perfevt service for your needs
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
                        <button className="popular_btn">Cedio Editing</button>
                        

                    </div>

                </div>
                
            </div>
            <div className="flex   secondSection" >
                <div className="job">
                    <Job />
                </div>
                <div className="job">
                    <Job />
                </div>
                <div className="job">
                    <Job />
                </div>
                <div className="job">
                    <Job />
                </div>
                <div className="job">
                    <Job />
                </div>
                <div className="job">
                    <Job />
                </div>
            </div>
            <div className="flex bg-gray-200 thirdSection">
                <div></div>
            </div>
        </div>
    );
}

export default HomePage;
