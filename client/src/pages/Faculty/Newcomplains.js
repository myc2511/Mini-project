import React from 'react'
import FacultyNav from '../../components/FacultyNav'
import Newcomplaints from '../../components/Faculty/Newcomplaints'

function Newcomplains() {
  return (
    <div>
        <FacultyNav/>
        <div className=' container mx-auto mt-40'>
           <Newcomplaints/>
           <Newcomplaints/>
           <Newcomplaints/>
        </div>
      
    </div>
  )
}

export default Newcomplains
