import React from 'react'
import Closedcmpt from '../../components/Faculty/Closedcmpt'
import FacultyNav from '../../components/FacultyNav'


function ClosedCompalins() {
  return (
    <div>
      <FacultyNav/>
      <div className=' container mx-auto mt-40'>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
            <Closedcmpt/>
        </div>

    </div>
  )
}

export default ClosedCompalins
