
import { Fragment } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';


const navigation = [
  { name: 'Become a jobPicker', href: '#', current: true },
  { name: 'Sign in', href: 'login', current: false },
  ,
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
  const [{user},dispatch] = useStateValue();

  return (
    <>

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {user&&<li><a>Hi, {user.username}</a></li>}
            {!user&&<Link to="/login"><li><a>Sign In</a></li></Link>}
            <Link to="/postJob"><li><a>PostJob</a></li></Link>
            {user&&<Link to="/yourorders"><li><a>Your Orders</a></li></Link>}
            {user&&<Link to="/yourjobs"><li><a>Your Jobs</a></li></Link>}
            <Link to=""><li><a>Your Profile</a></li></Link>
            <Link to="/profile"><li><a>Settings</a></li></Link>
            {user&&<Link to=""><li><a>signOut</a></li></Link>}
            
            
            
          </ul>
        </div>
      </div>
      <div className="navbar-center">
       
        <Link to="/"><a className="btn btn-ghost normal-case text-xl">Job Picker</a></Link>
        
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>


    </>
  )
}
