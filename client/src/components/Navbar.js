import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Link,useNavigate } from 'react-router-dom';
import logo from './img/CC-1.png'
import { logout,reset } from '../features/auth/authSlice';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbar() {


  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth)

    const onLogout=()=>{
         dispatch(logout());
         dispatch(reset());
    //  navigate("/");
    navigate("/", { replace: true });
 
    }
  return (
    <>
   <nav class="bg-white px-2 sm:px-4  py-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class=" flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center">
  <img src={logo} className="w-20" alt="faculty/HomeFlowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CollegeComplaint</span>
      
  </a>
  <div class="flex md:order-2 w-48 justify-between">
  {user?
  (<button type="button" onClick={onLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogOut</button>):(<></>)}
     <div className='mr-8'>
      <Link to='/Userprofile'>
      {user?(<AccountCircleIcon  sx={{
      color: "white",
      fontSize:"50px"
         
  }} />):(<></>)}</Link> </div>
    {user?( <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>):(<></>)}
  </div>
  {user?(
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li> 
      <a href="" className="block py-2 pl-3 text-2xl pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"><Link to='/Blog'>Blog</Link></a>
      </li>
      <li>
      <a href="" className="block py-2 pl-3 text-2xl pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link to='/Complaint'>Complaint</Link></a>
      </li>
  </ul>
  </div>):(<></>)}
  </div>
</nav>

      </>
  )
}

export default Navbar
