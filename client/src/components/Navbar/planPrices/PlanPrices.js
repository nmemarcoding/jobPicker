import React, { useState, useEffect } from 'react';

export default function PlanPrices() {
    const datas = [{price:"100",description:" 1 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"450",description:" 3 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"650",description:" 5 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"}  ]
    
    const [data,setData] = useState(datas[0])

    const plan = (e)=>{
        
        
        setData(datas[e.target.value])
    }
    return (
        <>
        <div style={{border: "1px solid gray",padding:"20px"}}>
            <div className="" style={{display: "flex", justifyContent:"space-between"}}>
                <button onClick = {plan} value="0" className="" >Basic</button>
                <button onClick = {plan} value="1" className="">Standard</button>
                <button onClick = {plan} value="2" className="">Premium</button>
            </div>
        </div>
        <div style={{border: "1px solid gray",padding:"20px"}}>
            <div className="" style={{fontSize:"30px"}}>${data.price}</div>
            <br></br>
            <p style={{display:"flex"}}>
               
                <p> {data.description}</p>
            </p>
            <button style={{textAlign:"center" ,width:"100%" ,marginTop:"20px",backgroundColor:"#1DBF73",padding:"5px",color:"white",borderRadius:"3px"}}>Continue</button>
        </div>
        
        </>
        
    )
}
