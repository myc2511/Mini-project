import React from 'react'

function Singlecmpln() {
  return (
    <div className=" p-5 border-2 m-5 rounded-2xl border-custom-grey cmpln ">
        <a href="" className="no-underline hover:underline  inline-block text-5xl text-custom-blue   " >Title</a>
        <span className="   rounded-full p-3 text-xl  border-2 border-custom-grey">Private</span>
        <span className=' block'>Ticket No: </span>
        <p className=" ">Complain Related: Hostel</p>

        <span className="inline-block text-sm">Date at Time</span>
        <span className="float-right inline-block">Status:Accepted </span>
        
    </div>
  )
}

export default Singlecmpln