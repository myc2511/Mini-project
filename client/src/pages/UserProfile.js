import React from 'react'
import Navbar from '../components/Navbar'
import Singlecmpln from '../components/Singlecmpln'
function userProfile() {
  return (
    <div>
  <Navbar/>
  <div className="parent  m-auto mt-20 flex flex-row">
    <div className="bio basis-1/3">
       <img src="/avatar.png" className="w-40 m-3"   alt=" profile img"/>
       <p className='p-1'>Name : Mohammad Shafiuddin</p>
       <p className='p-1'>Enrollment No: LCS2020053</p>
       <p className='p-1'>Email : shafiuddin9155@gmail.com</p>
       <p className='p-1'>Mobile No:9572326138</p>
         <button className="bg-custom-blue text-white text-sm  p-2 rounded-full">Edit Profile</button>
    </div>
    <div className='basis-2/3'>
    <Singlecmpln/>
    <Singlecmpln/>


    </div>
  </div>
    </div>
  )
}

export default userProfile