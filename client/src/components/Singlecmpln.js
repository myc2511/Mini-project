import React from 'react'

function Singlecmpln() {
  return (
    <div className=" p-5 border-2 m-5 rounded-2xl border-custom-grey cmpln ">
        <a href="" className="no-underline hover:underline p-4 inline-block text-5xl text-custom-blue   " >Title</a>
        <span className="   rounded-full p-4 text-xl  float-right border-2 border-custom-grey">Private</span>
        <span className='pl-4 block'>Ticket No: </span>
        <p className="pl-4 ">Complain Related: Hostel</p>

        <span className="pl-4 inline-block text-sm">Date at Time</span>
        <span className="float-right inline-block">Status: Accepted </span>
        
    </div>
  )
}

export default Singlecmpln