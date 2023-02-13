import React from 'react'
import Singlecmpln from '../../components/Singlecmpln'
import FacultyNav from '../../components/FacultyNav'

function ClosedCompalins() {
  return (
    <div>
      <FacultyNav/>
      <div className=' container mx-auto mt-40'>
            <Singlecmpln/>
            <Singlecmpln/>
            <Singlecmpln/>
            <Singlecmpln/>
        </div>

    </div>
  )
}

export default ClosedCompalins
