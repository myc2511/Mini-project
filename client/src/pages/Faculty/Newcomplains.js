import React from 'react'
import FacultyNav from '../../components/FacultyNav'
import Singlecmpln from '../../components/Singlecmpln'

function Newcomplains() {
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

export default Newcomplains
