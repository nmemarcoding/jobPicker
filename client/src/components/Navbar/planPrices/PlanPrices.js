import React, { useState, useEffect } from 'react';
import "./PlanPrices.css"
import moment from 'moment'
import { useStateValue } from '../../../StateProvider';
import { useNavigate } from "react-router-dom";
import {publicRequest} from '../../../hooks/requestMethods'
import StripeCheckout from 'react-stripe-checkout';



export default function PlanPrices(props) {
    const datas = [{price:"100",description:" 1 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"450",description:" 3 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"},
                {price:"650",description:" 5 Page PSD or Xd or Figma template design+ 3-5 section (coding not included)"}  ]
    
    const navigate = useNavigate();
    const [data,setData] = useState(datas[0])
    const [{user},dispatch] = useStateValue();
    const [credentials,setCredentials] = useState({
        customer:user?.id,
        job:props.jobId,
        time:undefined,
        customerAddress:"aliso viejo",
        day:undefined,
        
    })
    const [body,setBody] = useState({})
     
    
    const [time,setTime] = useState([])

    const [day,setDay]=useState()
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

    const getTime = (times)=>{
        var result = [];
        for (var i = 0; i < times.length - 1; i++) {
            var start = new Date("1970-01-01 " + times[i]);
            var end = new Date("1970-01-01 " + times[i + 1]);
            while (start <= end) {
            result.push(start.toTimeString().slice(0, 5));
            start.setMinutes(start.getMinutes() + 61);
            }
        }
        setTime(result)
    }
    
    const handleChange=(e)=>{
        // console.log(e.target.value.toLowerCase())
        setTime(props?.dates[e.target.value.toLowerCase()])
        
        setDay(e.target.value.toLowerCase())
        
        console.log(credentials)
    }
    
    useEffect(() => {
        console.log(time)
       

    }
    ,[time])
    useEffect(() => {
        
        getTime(time)  
       

    },[day])

    const selectTime = (e) => {
        setCredentials((prev) => ({ ...prev,[e.target.id]: e.target.value,day:day}));
        
    }
    useEffect(() => {
        console.log(credentials.body)
        if(!user?.id){
            navigate("/login")
        }else{
            
            console.log(credentials)
            publicRequest.post('order',credentials).then((res)=>{
                console.log(res)
                window.alert(res.data)
               
                typeof res.data !== 'object' && window.alert(res.data)
            
            }).catch((e)=>{
                 
                console.log(e);
            })
        }
        
    },[body])

    const onToken = token => {
        const body = {
          amount: props.price * 100,
          token: token
        }
        setBody(body) ;
        setCredentials((prev) => ({ ...prev,body:body}));
        
    };

   

    



        
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
                <option   value={moment().format('dddd')}>{moment().format('dddd MMM Do ' )}</option>
                <option  value={moment().add(1, 'days').format('dddd')}>{moment().add(1, 'days').format('dddd MMM Do ' )}</option>
                <option onClick={handleChange} value={moment().add(2, 'days').format('dddd')}>{moment().add(2, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(3, 'days').format('dddd')}>{moment().add(3, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(4, 'days').format('dddd')}>{moment().add(4, 'days').format('dddd MMM Do ' )}</option>
                <option value={moment().add(5, 'days').format('dddd')}>{moment().add(5, 'days').format('dddd MMM Do ' )}</option>
                <option  value={moment().add(6, 'days').format('dddd')}>{moment().add(6, 'days').format('dddd MMM Do ' )}</option>
            </select>
            <br></br>
            <br></br>
        
            <select id="time"onChange={selectTime} >
                <option >Select Time</option>
                {time?.map((data,index)=><option key={index} >{data}</option>)}
            </select>
            <hr></hr>
            <br></br>
            <StripeCheckout
                name="Job Picker"
                description={`Your total is $${props.price}`}
                amount={props.price * 100} // convert the price to cents
                token={onToken}
                stripeKey="pk_test_51MSPoNCDDzqrs9GtooTYQ8zt04tc10ZbhtozeU7GVAtwjYwCgqoPPFValOf4esCo0CmjJqIQWjd2eXuMAKFKDDjG00mCa0TptR"
            >
                
                <button className="btn glass"style={{textAlign:"center" ,width:"100%" ,marginTop:"20px",backgroundColor:"#1DBF73",padding:"5px",color:"white",borderRadius:"3px"}} >Continue</button>
            </StripeCheckout>
            
            
        </div>
        
        </div>
        
    )
}
