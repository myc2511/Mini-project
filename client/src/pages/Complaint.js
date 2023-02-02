import React from 'react'
import ComplaintForm from '../components/ComplaintForm'
import Navbar from '../components/Navbar'

function Complaint() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto text-center mt-8">
        <h1>Register Your Complaint</h1>
        <ComplaintForm/>
      </div>
    </div>
  )
}

export default Complaint
