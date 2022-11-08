import React from 'react'
import "./AboutSeller.css"

export default function AboutSeller({data}) {
  return (
    <div className="boxShadow">
        < div className="sellerInfo flex" style={{marginBottom:"20px",flexWrap:"wrap"}}>
            <img class="ziXAPIc" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/054e0ae3ffb03d2f5a279e684d7671f1-1608816882525/d487ab12-5d5a-4667-a058-39891208d8ab.png" alt="shahin_hossen" loading="lazy"/>
            <div className="sellerName" style={{margin:"0 10px"}}>{data?.owner?.username}</div> 
            <div className="sellerRate" style={{margin:"0 10px",color:"gold"}}>Top Rated Seller</div>
            <div className="sellerStar" style={{margin:"0 10px"}}>⭐️⭐️⭐️⭐️⭐️ 5 (228)</div>
            <div className="orderInQueue">4 Orders in Queue</div>
        </div>
        <div style={{border:"solid .5px gray", padding:"20px"}}>
                <div className="" style={{display:"flex"}}>
                    <div className="">
                        <div className="" style={{color:"gray"}}>From</div>
                        <div className="">USA</div>
                    </div>
                    <div className="" style={{paddingLeft:"50%"}}>
                        <div className="" style={{color:"gray"}}>Member since</div>
                        <div className="">Apr 2019</div>
                    </div>
                </div>
                <div className="" style={{display:"flex",marginTop:"20px"}}>
                    <div className="">
                        <div className="" style={{color:"gray"}}>Avg response time</div>
                        <div className="">1 hour</div>
                    </div>
                    <div className="" style={{paddingLeft:"42.2%"}}>
                        <div className="" style={{color:"gray"}}>Last delivery</div>
                        <div className="">about 4 hours</div>
                    </div>
                </div>
                <hr style={{border: ".1px solid gray",marginTop:"10px"}}/>
                <p style={{paddingTop:"20px"}}>
                    {data?.desc}
                </p>
        </div>
      
    </div>
  )
}
