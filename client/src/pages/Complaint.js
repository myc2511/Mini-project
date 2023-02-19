import React from 'react'
import ComplaintForm from '../components/ComplaintForm'
import Navbar from '../components/Navbar'

function Complaint() {
  return (
    <div>
      <Navbar/>
      <div className="form mt-44">
        <h1 className='text-4xl p-5 text-gray-600'>Student Complaint Form</h1>
        <ComplaintForm/>
      </div>
    </div>
  )
}

export default Complaint
