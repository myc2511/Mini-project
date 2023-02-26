import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Singlecmpln from '../components/Singlecmpln'

function UserProfile() {
  const [showing,setshowing]=useState(false);
  const [name,setname]=useState("Shafi");
  return (

    <div className=' flex flex-col min-h-screen'>
 
    
     <Navbar/>

  <div className="parent  m-auto mt-40 flex flex-row">
    <div className= " m-5 bio basis-1/3">
       <img src="/avatar.png" className="w-52 m-3"   alt=" profile img"/>
       <p className='p-1'>Name : Mohammad Shafiuddin</p>
       <p className='p-1'>Enrollment No: LCS2020053</p>
       <p className='p-1'>Email : shafiuddin9155@gmail.com</p>
       <p className='p-1'>Mobile No:9572326138</p>
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
    <div className='basis-2/3'>
    <Singlecmpln/>
    <Singlecmpln/>
     </div>
  </div>
    </div>
  
  )
}

export default UserProfile