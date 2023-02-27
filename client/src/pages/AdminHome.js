import React from 'react'
import AdminNav from '../components/AdminNav'
import { useState } from 'react'


function AdminHome() {
    const [showing,setshowing]=useState(false);
   
  return (
    <div className='min-h-screen'>
   <AdminNav/> 
   <div className='mt-40 mx-auto'>   
  
    <div className="parent m-auto mt-20 mb-20 box-shadow rounded-lg h-full">
      <div className= "flex flex-row m-10  bio  items-center">
        <div className=' w-1/2 items-start'>
         <img src="/avatar.png" className="w-96 m-10  rounded-full"   alt=" profile img"/>
        </div>
       
         
        <div className='flex flex-col ml-20 w-2/3 items-start p-5'>
          <div className=''>
         <p className='p-2'>Name : Mohammad Shafiuddin</p>
         <p className='p-2'>Enrollment No: LCS2020053</p>
         <p className='p-2'>Email : shafiuddin9155@gmail.com</p>
         <p className='p-2'>Mobile No : 9572326138</p>
         <button className="bg-custom-blue edt-btn mt-5 text-white text-sm  p-3 rounded-lg" onClick={() => setshowing(true)}>Edit Profile</button>
         </div>
        <div className='pt-5'>
      <div className={showing?"block":"hidden"} >
              <label htmlFor=''>
                  <span className='mt-2 mb-1 inline-block'>Name</span>
                  <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
              </label>
              <label htmlFor=''> 
                  <span className='mt-2 mb-1 inline-block'>Mobile No</span>
                  <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
              </label>
              <label htmlFor=''>
                  <span className='mt-2 mb-1 inline-block'>Change Photo</span>
                  <input className='border-2 mb-4 border-slate-400 w-full p-1 rounded-lg' type="file"/>
              </label>
             <button className='bg-custom-blue text-white text-sm  m-2 p-3 rounded-lg'>Save</button>
             <button onClick={() => setshowing(false)} className='bg-custom-grey text-black text-sm  m-2 p-3 rounded-lg'>Cancel</button>
         
         </div>
         </div>

         </div>
 </div>
   
         </div>
  
         </div>

       </div>
       )
}

export default AdminHome