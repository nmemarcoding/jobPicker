
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { useStateValue } from '../../../StateProvider';
import {publicRequest} from '../../../hooks/requestMethods'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PostJobPage() {
    const [{user},dispatch] = useStateValue();
    const [button,setButoon]=useState(false);
    const [credentials,setCredentials] = useState({
      title:undefined,
      desc:undefined,
      img:"https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/152611507/original/cb954436e317ae584167b9c7bed86f67bd0feaaf.png",
      location:{type:"Point",coordinates:[-80,20.791]},
      address:undefined,
      price:undefined,
      rate:undefined,
      owner:user.id,
      monday:[],
      tusday:[],
      wednesday:[],
      thursday:[],
      friday:[],
      saturday:[],
      sunday:[]

    })
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value}));
      console.log(credentials)
      
    };
    const navigate = useNavigate();
    const jobDetails = ()=>{
        
    }

  const  handlePost =  (e)=>{
    e.preventDefault();
    publicRequest.post('job',credentials).then((res)=>{
        
        console.log(res.data)
        navigate(`/job/${res?.data?._id}`);
       
    }).catch((e)=>{
            
        window.alert(e.response.data);
    })
  }

  const handleDateChange = (e) => {
    
    (credentials[e.target.id].length >= 2) ? window.alert("you cant add any more"):
    setCredentials((prev) => ({ ...prev, [e.target.id]: [...prev[e.target.id],e.target.value] }));
    console.log(credentials)
  }

  const uploadImage = (event) => {
    setButoon(true);
    const cloud_name = 'dojtzxjie';
    const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;
    const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

    const file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    console.log('start');
    axios(CLOUDINARY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(response => {
      setCredentials((prev) => ({ ...prev, img: response.data.secure_url}));
    }).then(setButoon(false) )
    .catch((e)=>{
      console.log(e)
    })

  }



    
    return (
      <>
      <Navbar/>
      <div style={{padding:"20px",backgroundColor:"#f3f4f6"}}>
            <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Job Posting</h3>
              <p className="mt-1 text-sm text-gray-600">Use this  form to post your job</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form  method="POST" >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required={true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Job description
                      </label>
                      <br></br>
                      <textarea className="textarea textarea-ghost" name="desc" id="desc" onChange={handleChange} required></textarea>
                    </div>

                   
                    {/* <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-2">
                        Dates
                      </label>
                        <div style={{display:"flex", flexDirection:"column"}}>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Monday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Tusday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Wednesday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Thursday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Friday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Saturday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                          <div style={{display:"flex", justifyContent:"space-between"}} ><div><input type="checkbox"/><lable> Sunday</lable></div><input type="time" className="ml-9"/><input type="time" className="ml-9"/></div>
                        </div>
                    </div> */}
                    <div className="col-span-6 sm:col-span-4">

                    <div className="col-span-6 sm:col-span-4" >
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-2">
                        Dates
                      </label>
                        <div style={{display:"flex",}}>
                          <div style={{display:"flex", flexDirection:"column"}}>
                            <div><lable> Monday</lable></div>
                            <div><lable> Tusday</lable></div>
                            <div><lable> Wednesday</lable></div>
                            <div><lable>Thursday </lable></div>
                            <div><lable> Friday</lable></div>
                            <div><lable> Saturday</lable></div>
                            <div><lable> Sunday</lable></div>
                          </div>
                          <div style={{display:"flex", flexDirection:"column" }}>
                           <input type="time" id="monday" onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="tusday" onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="wednesday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="thursday" onChange={handleDateChange}  className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="friday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="saturday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="sunday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                          </div>
                          <div style={{display:"flex", flexDirection:"column"}}>
                            <input type="time" id="monday"  onChange={handleDateChange} className="ml-9" style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="tusday" onChange={handleDateChange} className="ml-9" style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="wednesday"   onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="thursday" onChange={handleDateChange}  className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="friday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="saturday" onChange={handleDateChange}  className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                            <input type="time" id="sunday"  onChange={handleDateChange} className="ml-9"style={{margin:"0 0 0 10px",width:"93%"}}/>
                          </div>

                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4"></div>

                    
                    
                    </div>
                        
                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="0.00"
                            onChange={handleChange}
                            required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                            </div>
                            
                        </div>
                        <br></br>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                                <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                                >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={uploadImage} />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700" >
                        Address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                        onClick={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                  disabled={button}
                    onClick={handlePost}
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
        

      </div>
      </>
    )
}
