import React from 'react';
import Job from '../../components/Navbar/job/Job';
import Navbar from "../../components/Navbar/Navbar"
import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="h-screen m-2">
            <Navbar/>
            <div className="flex bg-gray-200 firstSection " style={{backgroundImage: `url("https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png")`,

                                                                   }}>
                {/* left */}
                <div className="flex flex-col justify-center items-center ml-8 w-full flex-1">
                    <h className="font-bold">
                        Find The perfevt service for your needs
                    </h>
                    <input type="search" className="w-1/2"/>
                </div>
                {/* right */}
                <div className="flex flex-col justify-center items-center flex-1">
                   <h1 className="">fsdfhsfjshfksjdfsjhfsjk</h1> 
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
