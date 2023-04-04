import React from 'react'
import Activecmpt from '../../components/Faculty/Activecmpt'
// import Singlecmpln from '../../components/Singlecmpln'
import FacultyNav from '../../components/FacultyNav'


function Activecomplains() {
  return (
    <div>
      <FacultyNav homeclr='dark:text-gray-400' newcpl="dark:text-gray-400" activecpl='dark:text-blue-400' closedcpl="dark:text-gray-400"/>
      <div className=' container mx-auto my-40'>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
        </div>
      
    </div>
  )
}

export default Activecomplains
