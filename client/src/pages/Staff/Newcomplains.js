import React from 'react'
import FacultyNav from '../../components/FacultyNav'
import Newcomplaints from '../../components/Faculty/Newcomplaints'

function Newcomplains() {
  return (
    <div>
        <FacultyNav homeclr='dark:text-gray-400' newcpl="dark:text-blue-400" activecpl='dark:text-gray-400' closedcpl="dark:text-gray-400"/>
        <div className=' container mx-auto my-40'>
           <Newcomplaints/>
           <Newcomplaints/>
           <Newcomplaints/>
           <Newcomplaints/>
           <Newcomplaints/>
        </div>
      
    </div>
  )
}

export default Newcomplains
