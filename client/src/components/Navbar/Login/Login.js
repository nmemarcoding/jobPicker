import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useState } from 'react';
import {publicRequest} from '../../../hooks/requestMethods'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../../StateProvider'

export default function Login() {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const [{user},dispatch] = useStateValue();

    const navigate = useNavigate()
    const  handleLogin =  (e)=>{
        e.preventDefault();
        publicRequest.post('auth/login',{username,password}).then((res)=>{
            dispatch({
                type : "SET_USER",
                user:{
                    id: res.data._id,
                    username: res.data.username,
                    email: res.data.email,
                    createdAt:res.data.createdAt,
                    updatedAt:res.data.updatedAt,
                    accessToken:res.data.accessToken,
                }
            })
            console.log(res.data)
            navigate(-1);
        }).catch((e)=>{
                
            window.alert(e.response.data);
        })
      }
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={"https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"} alt="/" />
        

        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center py-4'>Job Picker</h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                    <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input className='border relative bg-gray-100 p-2' type="username" onChange ={(e)=>setUsername(e.target.value.trim())} />
                </div>
                <div className='flex flex-col '>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" onChange ={(e)=>setPassword(e.target.value.trim())}/>
                </div>
                <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={handleLogin}>Sign In</button>
                <Link to ="/signup"><button className='w-full py-3 mt-8 bg-gray-300 hover:bg-indigo-500 relative text-white'>Sign Up</button></Link>
                
            </form>
        </div>
        </div>
    )
}