import React from 'react'

function Activecmpt() {
  return (
    <div>
      <div className="p-2 w-2/3 mx-auto m-5 rounded-2xl  cmpln box-shadow">
        <a href="" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
        <span className="  pl-2 pr-2 mt-2 mr-3 text-lg  float-right shadow-md ">Private</span>
       <div className='flex justify-between'> 
       <div className='flex'><span className='pl-4  text-sm block'>Ticket No : 646378668 </span>
        <p className="pl-4 text-sm">Complain Related: Hostel</p>
        <span className="pl-4 inline-block text-sm">Tuesday 18:20:22 IST</span></div> 
       <div> <span>Status : </span><span className="mr-3 inline-block text-yellow-400"> Pending </span></div>
        </div>
    </div>
    </div>
  )
}

export default Activecmpt
