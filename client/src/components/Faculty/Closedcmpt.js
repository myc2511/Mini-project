import React from 'react'

function Closedcmpt() {
  return (
    <div>
      <div className="p-2  m-5 w-2/3 mx-auto rounded-2xl box-shadow cmpln">
        <a href="" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
        <p className=" pl-2 pr-2 mt-2 mr-3 text-lg  float-right shadow-md">Private</p>
       <div className='flex justify-around'>
        <span className=' mt-4  text-sm block'>Ticket No:46786378 </span>
        <p className=" mt-4 text-sm">Complain Related: Hostel</p>
        <span className=" mt-4 inline-block text-sm">Date at Time</span>
        <div><span>Status : </span><span className=" mt-2 inline-block text-red-500"> Closed </span></div>
        </div>
    </div>
    </div>
  )
}

export default Closedcmpt
