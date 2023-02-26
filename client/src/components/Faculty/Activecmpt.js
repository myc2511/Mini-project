import React from 'react'

function Activecmpt() {
  return (
    <div>
      <div className="p-2 border-2 m-5 rounded-2xl border-custom-grey cmpln ">
        <a href="" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
        <span className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Private</span>
       <div className='flex justify-between'> 
       <div className='flex'><span className='pl-4  text-sm block'>Ticket No: </span>
        <p className="pl-4 text-sm">Complain Related: Hostel</p>
        <span className="pl-4 inline-block text-sm">Date at Time</span></div>
       <div> <span className="mr-3 inline-block">Status: Pending </span></div>
        </div>
    </div>
    </div>
  )
}

export default Activecmpt
