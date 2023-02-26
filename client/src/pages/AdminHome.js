import React from 'react'
import AdminNav from '../components/AdminNav'
import { useState } from 'react'


function AdminHome() {
    const [showing,setshowing]=useState(false);
   
  return (
    <div>
   <AdminNav/> 
   <div className="flex mx-auto content-center justify-center  mt-60 ">
    
    <div className=" box-shadow border-2 p-10 ">
    <img src="/avatar.png" className="w-40 mx-auto "   alt=" profile img"/>
         <p className='p-1'>Name : Aman Gangwar</p>
         <p className='p-1'>Enrollment No: LCS2020049</p>
         <p className='p-1'>Email : amangangwar162001@gmail.com</p>
         <p className='p-1'>Mobile No:9572326XXX</p>
           <button className="bg-custom-blue edt-btn mt-5 text-white text-sm  p-2 rounded-lg" onClick={() => setshowing(true)}>Edit Profile</button>
         <div className={showing?"block":"hidden"} >
              <label for="">
                  <span className='mt-2 mb-1 inline-block'>Name</span>
                  <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
              </label>
              <label for="">
                  <span className='mt-2 mb-1 inline-block'>Mobile No</span>
                  <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
              </label>
              <label for="">
                  <span className='mt-2 mb-1 inline-block'>Change Photo</span>
                  <input className='border-2 mb-4 border-slate-400 w-full p-1 rounded-lg' type="file"/>
              </label>
             <button className='bg-custom-blue text-white text-sm  m-2 p-3 rounded-lg'>Save</button>
             <button onClick={() => setshowing(false)} className='bg-custom-grey text-black text-sm  m-2 p-3 rounded-lg'>Cancel</button>
           </div>
           
      </div>

    </div>
    </div>

    
  )
}

export default AdminHome