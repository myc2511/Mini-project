import React from 'react'
import Closedcmpt from '../../components/Faculty/Closedcmpt'
import FacultyNav from '../../components/FacultyNav'
import Trackorder from '../../components/Trackorder'


function ClosedCompalins() {
  return (
    <div className="flex flex-col min-h-screen">
      <FacultyNav homeclr='dark:text-gray-400' newcpl="dark:text-gray-400" activecpl='dark:text-gray-400' closedcpl="dark:text-blue-400"/>
      <div className=' container mx-auto my-40'>
            {/* <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/> */}

            <Trackorder/>
        </div>

    </div>
  )
}

export default ClosedCompalins
