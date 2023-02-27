import React from 'react'
import Closedcmpt from '../../components/Faculty/Closedcmpt'
import FacultyNav from '../../components/FacultyNav'


function ClosedCompalins() {
  return (
    <div>
      <FacultyNav homeclr='dark:text-gray-400' newcpl="dark:text-gray-400" activecpl='dark:text-gray-400' closedcpl="dark:text-blue-400"/>
      <div className=' container mx-auto mt-40'>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
        </div>

    </div>
  )
}

export default ClosedCompalins
