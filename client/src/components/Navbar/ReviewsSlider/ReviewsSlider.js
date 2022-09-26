import React, { useState, useEffect } from 'react';


const ReviewsSlider = () => {
    const datas = [{image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c5b78a0c3a7901ba749eb337386d66c9-1611002122024/b0a280b8-4956-4517-b00b-a9cfeb6f5b6e.png",name:"Alex",star:"⭐️⭐️⭐️⭐️⭐️",review:"Quality was MUCH better than I expected for the price. He was able to take a project brief and turn it into a site that met the goals. Will probably hire again."},
                    {image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6a00153f292bd03bb17e92a89388516b-1657778374543/6d9cd823-7277-49e4-a9e1-109d0ddb0a98.jpg",name:"Alex",star:"⭐️⭐️⭐️⭐️⭐️",review:"Very nice work. My favorite designer because he is very professional and fast. And the most important thing the quality is still very high"}]
    const [data,setData] = useState(datas[0])
    const [number,setNumber]= useState(0)
    const nextReview = ()=>{
        console.log(number)
            setNumber(number+1)
            
            console.log(number)
        
        
    }
    const perReview = ()=>{
       
            setNumber(number-1)
            
            console.log(number)
           
     
        
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
        <div className="resize-slider" style={{display: 'flex',}}>
         <button className=""style={{position:"absolute",left:"20px"}} onClick={perReview}>↩ </button>  
        <img src={data?.image}  style={{borderRadius:"50%",width:"50px"}}class="profile-pict-img" alt="peterlewis98" loading="lazy"/> 
        <div className="reviewRightContainer" style={{marginLeft:"20px"}}>
            <div className="reviewRate" style={{display: 'flex'}}>
                <div className="">{data?.name} United States  {data?.star}  </div>
            </div>
            <p>{data?.review}</p>
        </div>
        <button className="" style={{position:"absolute",right:"20px",}} onClick={nextReview}>↪</button>
        </div>
    );
}

export default ReviewsSlider;
