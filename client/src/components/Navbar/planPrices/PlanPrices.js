import React, { useState, useEffect } from 'react';
import "./PlanPrices.css"
import moment from 'moment'

export default function PlanPrices(props) {
    const datas = [{price:"100",description:" 1 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"450",description:" 3 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"650",description:" 5 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"}  ]
    
    const [data,setData] = useState(datas[0])
   
    const [time,setTime] = useState([])
    const plan = (e)=>{
        
        
        setData(datas[e.target.value])
    }
    const handleChange=(e)=>{
        // console.log(e.target.value.toLowerCase())
        setTime(props?.dates[e.target.value.toLowerCase()])
        
    }
    
    useEffect(() => {
        console.log(time)
    }
    ,[time])

    return (
        <div className="planPrice_container ">
        <div style={{padding:"20px"}} className="">
            <div className="" style={{display: "flex", justifyContent:"space-between"}}>
             
            </div>
            
        </div>
        <hr></hr>
        <div style={{padding:"20px"}}>
            <div className="" style={{fontSize:"30px"}}>${props.price}</div>
            <br></br>
            <select onChange={handleChange}>
                <option>Select Date</option>
                <option  value={moment().format('dddd')}>{moment().format('dddd MMM Do ' )}</option>
                <option  value={moment().add(1, 'days').format('dddd')}>{moment().add(1, 'days').format('dddd MMM Do ' )}</option>
                <option onClick={handleChange} value={moment().add(2, 'days').format('dddd')}>{moment().add(2, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(3, 'days').format('dddd')}>{moment().add(3, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(4, 'days').format('dddd')}>{moment().add(4, 'days').format('dddd MMM Do ' )}</option>
                <option value={moment().add(5, 'days').format('dddd')}>{moment().add(5, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(6, 'days').format('dddd')}>{moment().add(6, 'days').format('dddd MMM Do ' )}</option>
            </select>
            <br></br>
            <br></br>
        
            <select >
                <option>Select Time</option>
                {time.map((data)=><option>{data}</option>)}
                
                {/* <option  value={moment().format('dddd')}>{moment().format('dddd MMM Do ' )}</option>
                <option  value={moment().add(1, 'days').format('dddd')}>{moment().add(1, 'days').format('dddd MMM Do ' )}</option>
                <option onClick={handleChange} value={moment().add(2, 'days').format('dddd')}>{moment().add(2, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(3, 'days').format('dddd')}>{moment().add(3, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(4, 'days').format('dddd')}>{moment().add(4, 'days').format('dddd MMM Do ' )}</option>
                <option value={moment().add(5, 'days').format('dddd')}>{moment().add(5, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(6, 'days').format('dddd')}>{moment().add(6, 'days').format('dddd MMM Do ' )}</option> */}
            </select>
            <hr></hr>
            <br></br>
            <p style={{display:"flex"}}>
               
                <p> {data.description}</p>
            </p>
            <button className="btn glass"style={{textAlign:"center" ,width:"100%" ,marginTop:"20px",backgroundColor:"#1DBF73",padding:"5px",color:"white",borderRadius:"3px"}}>Continue</button>
        </div>
        
        </div>
        
    )
}
