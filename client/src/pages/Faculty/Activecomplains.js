import React from 'react'
import Activecmpt from '../../components/Faculty/Activecmpt'
// import Singlecmpln from '../../components/Singlecmpln'
import FacultyNav from '../../components/FacultyNav'


function Activecomplains() {
  return (
    <div>
      <FacultyNav/>
      <div className=' container mx-auto mt-40'>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
            <Activecmpt/>
        </div>
      
    </div>
  )
}

export default Activecomplains
