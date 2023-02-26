import React from 'react'

function Closedcmpt() {
  return (
    <div>
      <div className="p-2 border-2 m-5 rounded-2xl border-custom-grey cmpln">
        <a href="" className="pl-24 no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
       <div className='flex justify-around'>
        <p className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Private</p>
        <span className=' mt-4  text-sm block'>Ticket No:46786378 </span>
        <p className=" mt-4 text-sm">Complain Related: Hostel</p>
        <span className=" mt-4 inline-block text-sm">Date at Time</span>
        <span className=" mt-2 inline-block">Status: Closed </span></div>
        
    </div>
    </div>
  )
}

export default Closedcmpt
