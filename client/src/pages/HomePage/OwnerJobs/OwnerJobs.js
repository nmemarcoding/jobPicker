import React from 'react'
import {useState,useEffect } from 'react'
import {publicRequest} from '../../../hooks/requestMethods'
import Navbar from '../../../components/Navbar/Navbar'
import { useStateValue } from '../../../StateProvider';

export default function OwnerOrders() {
    const[jobs,setjobs] = useState([])
  
    const [{user},dispatch] = useStateValue();
    
    const fetchData = ()=>{
        publicRequest.get(`order/find/owner/${user?.id}`).then((res)=>{
        setjobs(res.data)
        
        
        }).catch((e)=>{
                
            window.alert(e.response.data);
        })
        
        
    }

    useEffect(() => {
        fetchData()
        
    },[]);
    useEffect(() => {
        console.log(jobs.sort(function(a, b){
            return a.time - b.time 
        }))
        
    },[jobs]);


    return (
        <div>
            <Navbar/>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Customer</th>
                        <th>Adress</th>
                        <th>Time</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        
                        {jobs?.map((data)=>(
                            <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox"   />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                {data.status}
                                </div>
                                <div>
                                <div className="font-bold">{data?.customer?.username}</div>
                                {/* <div className="text-sm opacity-50">United States</div> */}
                                </div>
                            </div>
                            </td>
                            <td>
                            {data.customerAddress}
                            <br/>
                            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                            </td>
                            <td>
                                {data?.day}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{data?.time}</span>
                            </td>
                            
                            <th>
                            <a href={`#${data._id}`}className="btn btn-ghost btn-xs">details</a>
                            </th>
                            <div className="modal" id={`${data?._id}`}>
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">{data?.job?.title}</h3>
                                    <p className="py-4">{data?.job?.desc}</p>
                                    <div className="modal-action">
                                    <a href="#" className="btn">Colse</a>
                                    </div>
                                </div>
                            </div>
                        </tr>
                        
                        ))}
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Adress</th>
                        <th>Time</th>
                        <th></th>
                    </tr>
                    </tfoot>
                    
                </table>
 


</div>
        </div>
    )
}
