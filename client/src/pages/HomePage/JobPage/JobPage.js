import "./JobPage.css"
import {useState,useEffect } from 'react'
import ImageSlider from "../../../components/Navbar/ImageSlider/ImageSlider"
import ReviewsSlider from "../../../components/Navbar/ReviewsSlider/ReviewsSlider"
import AboutSeller from "../../../components/Navbar/AboutSeller/AboutSeller"
import PlanPrices from "../../../components/Navbar/planPrices/PlanPrices"
import Navbar from "../../../components/Navbar/Navbar"
import {publicRequest} from '../../../hooks/requestMethods'
import moment from 'moment'

export default function JobPage() {
  const[jobData,setJobData] = useState([])


  const fetchData = ()=>{
    publicRequest.get(`job/find/${window.location.pathname.split('/')[2]}`).then((res)=>{
      setJobData(res.data)
      
      
    }).then(()=>{console.log(jobData)}).catch((e)=>{
            
        window.alert(e.response.data);
    })
    
    
  }

  useEffect(() => {
    fetchData()
    
  },[]);


  return (
    <>
    <Navbar/>
    

    <div style={{display:"flex",flexWrap:"wrap"}}>
      <div className="jobPage" >
        <p className="title">{jobData?.title?.toUpperCase()}</p>
        < div className="sellerInfo flex" style={{marginBottom:"20px",flexWrap:"wrap"}}>
            <img class="ziXAPIc" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/054e0ae3ffb03d2f5a279e684d7671f1-1608816882525/d487ab12-5d5a-4667-a058-39891208d8ab.png" alt="shahin_hossen" loading="lazy"/>
            <div className="sellerName" style={{margin:"0 10px"}}>{jobData?.owner?.username}</div> 
            <div className="sellerRate" style={{margin:"0 10px",color:"gold"}}>Top Rated Seller</div>
            <div className="sellerStar" style={{margin:"0 10px"}}>⭐️⭐️⭐️⭐️⭐️ 5 (228)</div>
            <div className="orderInQueue">4 Orders in Queue</div>
        </div>
        <ImageSlider img={jobData?.img}/>
        <p style={{margin:"20px 0",fontWeight:"bold"}}>What people loved about this seller</p>
        <ReviewsSlider/>
        <div className="aboutSeller_container">
          <AboutSeller data={jobData}/>
        </div>
        
        
        
      </div>
      <div className="planPrices_container" >
        <PlanPrices price={jobData?.price} 
          dates={
            {monday:jobData?.monday,tusday:jobData?.tusday,wednesday:jobData?.wednesday,
              thursday:jobData?.thursday,friday:jobData?.friday,saturday:jobData?.saturday,
              sunday:jobData?.sunday
            }            
          }
          jobId={window.location.pathname.split('/')[2]}
        />
        </div>
    </div>
    </>
  )
}
