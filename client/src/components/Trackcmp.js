import React ,{useState,useEffect} from 'react'

function Trackcmp(props) {

  return (
    <div className='bg-gray-100 p-20 w-3/4 m-auto mb-20'>
      
    <h1 className='pb-5 text-3xl'>Complaint Tracking</h1>
        
<ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 ml-5 dark:text-gray-400">                  
    <li class="mb-10 ml-6">            
        <span class={`absolute flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -left-2 ring-4 ring-white  ${props.status === 'Open'?"dark:bg-gray-700" :"dark:bg-green-700"}`}>
        </span>
        <h3 class="font-medium leading-tight">Accepted</h3>
        {/* <p class="text-sm">Step details here</p> */}
    </li>
    <li class="mb-10 ml-6">
        <span class={`absolute flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -left-2 ring-4 ring-white ${props.status === 'Open'?"dark:bg-gray-700" :"dark:bg-green-700"}`}>
        </span>
        <h3 class="font-medium leading-tight">InProgress</h3>
        {/* <p class="text-sm">Step details here</p> */}
    
   
      <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  

      {props.assigned[0].assignedto !== null?props.assigned.map((complaint) => (
        
        <li class="m-10 ml-6" key={complaint.assignedto}>

        <span class="absolute flex items-center justify-center w-4 h-4 bg-gray-100 rounded-full -left-2 ring-4 ring-white  dark:bg-green-700">
            
        </span>
        {}
        <p class="text-sm">{Date(complaint.time)}</p>
        <h3 class="font-medium leading-tight">{complaint.role}</h3>
        </li>
          )):<></>}
    </ol>
    </li>

    <li class="mb-10 ml-6">
        <span class={`absolute flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -left-2 ring-4 ring-white  ${props.status !== 'Closed'?"dark:bg-gray-700" :"dark:bg-green-700"}`}>
        </span>
        <h3 class="font-medium leading-tight">Closed</h3>
        {/* <p class="text-sm">Step details here</p> */}
    </li>
   
</ol>

    </div>
  )
}

export default Trackcmp
