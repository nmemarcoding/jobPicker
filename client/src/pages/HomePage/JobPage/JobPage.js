import "./JobPage.css"

import ImageSlider from "../../../components/Navbar/ImageSlider/ImageSlider"
import ReviewsSlider from "../../../components/Navbar/ReviewsSlider/ReviewsSlider"
import AboutSeller from "../../../components/Navbar/AboutSeller/AboutSeller"
import PlanPrices from "../../../components/Navbar/planPrices/PlanPrices"
export default function JobPage() {
  return (
    <div className="jobPage" style={{margin:"20px"}}>
      <p className="title">I will design photoshop or psd web template, xd website design</p>
      <div className="sellerInfo" style={{marginBottom:"20px"}}>
        <img class="ziXAPIc" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/054e0ae3ffb03d2f5a279e684d7671f1-1608816882525/d487ab12-5d5a-4667-a058-39891208d8ab.png" alt="shahin_hossen" loading="lazy"/>
        <div className="sellerName" style={{margin:"0 10px"}}>Nima</div> 
        <div className="sellerRate" style={{margin:"0 10px",color:"gold"}}>Top Rated Seller</div>
        <div className="sellerStar" style={{margin:"0 10px"}}>⭐️⭐️⭐️⭐️⭐️ 5 (228)</div>
        <div className="orderInQueue">4 Orders in Queue</div>
      </div>
      <ImageSlider/>
      <p style={{margin:"20px 0",fontWeight:"bold"}}>What people loved about this seller</p>
      <ReviewsSlider/>
      <div className="aboutSeller_container">
        <AboutSeller/>
      </div>
      <div className="planPrices_container" style={{marginTop:"20px"}}>
        <PlanPrices/>
      </div>
    </div>
  )
}
