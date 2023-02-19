import React from 'react'

function Singlecmpln() {
  return (
    <div className="p-2 border-2 m-5 rounded-2xl border-custom-grey cmpln ">
        <a href="" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
        <span className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Private</span>
        <span className='pl-4  text-sm block'>Ticket No: </span>
        <p className="pl-4 text-sm mt-1">Complain Related: Hostel</p>
        <span className="pl-4 inline-block text-sm">Date at Time</span>
        <span className="float-right mr-3  text-green-400 "> Accepted </span>
        <span className="float-right mr-3 ">Status</span>

        
    </div>
  )
}

export default Singlecmpln