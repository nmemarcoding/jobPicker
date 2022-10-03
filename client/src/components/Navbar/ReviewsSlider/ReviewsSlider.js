import React, { useState, useEffect } from 'react';
import "./ReviewsSlider.css"

const ReviewsSlider = () => {
    const datas = [{image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c5b78a0c3a7901ba749eb337386d66c9-1611002122024/b0a280b8-4956-4517-b00b-a9cfeb6f5b6e.png",name:"Alex",star:"⭐️⭐️⭐️⭐️⭐️",review:"Quality was MUCH better than I expected for the price. He was able to take a project brief and turn it into a site that met the goals. Will probably hire again."},
                    {image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6a00153f292bd03bb17e92a89388516b-1657778374543/6d9cd823-7277-49e4-a9e1-109d0ddb0a98.jpg",name:"David",star:"⭐️⭐️⭐️⭐️⭐️",review:"Very nice work. My favorite designer because he is very professional and fast. And the most important thing the quality is still very high"},
                    {image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/53a64df8cf05f5637859cbe451b4ff34-1640723052916/70efe107-ded1-4c54-ad4d-9424bae40336.jpg",name:"johan",star:"⭐️⭐️⭐️⭐️⭐️",review:"Great seller. Really good design style. Is willing to work also with demanding tasks. Looking forward to continue working with this seller."}]
    const [data,setData] = useState(datas[0])
    const [number,setNumber]= useState(0)
    const nextReview = ()=>{
            setNumber(number+1)   
    }
    const perReview = ()=>{
            setNumber(number-1)
    }
    useEffect(()=>{
        if(number<0){
            setNumber(0)
            setData(datas[0])
        } else if(number> datas.length-1){
            setNumber(0)
            setData(datas[0])

        }
        setData(datas[number])

    },[number])
    return (
        <div className="boxShadow flex items-center" style={{width: '100%',justifyContent: 'space-between'}}>
            
            <a href="#slide3" className="btn btn-circle w-5 rounded-full bg-gray-500" onClick={perReview}>❮</a> 
            <div className="resize-slider" style={{display: 'flex',padding:"20px" ,flexWrap:"wrap"}}>
           
                {/* <button className=""style={{position:"absolute",left:"20px"}} onClick={perReview}>↩ </button>   */}
                <div className="avatar" style={{marginRight:"10px"}}>
                    <div className="w-12 rounded-full">
                        <img src={data?.image} />
                    </div>
                </div>
                
                <div className="reviewRightContainer" style={{marginLeft:""}}>
                    <div className="reviewRate" style={{display: 'flex'}}>
                        <div className="">{data?.name} United States  {data?.star}  </div>
                    </div>
                    <hr style={{border: ".1px solid gray",marginTop:"10px"}}/>
                    <br></br>
                    <p>{data?.review}</p>
                    
                </div>
                
        
            </div>
            <a href="#slide1" className="btn btn-circle w-5 rounded-full bg-gray-500" onClick={nextReview}>❯</a>
            
            
        </div>
    );
}

export default ReviewsSlider;
