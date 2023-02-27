import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function Newcomplaints() {
  return (
    <div className="p-2 w-2/3 mx-auto box-shadow m-5 rounded-2xl  cmpln pb-4">
        <a href="" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue   " >Title</a>
        <span className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Private</span>
       

        <div className=' flex justify-between'>
            <div>
            <span className='pl-4  text-sm block'>Ticket No: </span>
        <p className="pl-4 text-sm mt-1">Complain Related: Hostel</p>
        <span className="pl-4 inline-block text-sm">Date at Time</span>
        <p className="pl-4 text-sm mt-1">Submittted By : Mohd Yasif Choudhary</p>
            </div>

           <div className='self-end w-28 flex justify-around'>
            <button type="button" class="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800">
 <DoneIcon/>
  <span className="sr-only">Icon description</span>
</button>
<button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800">
 <CloseIcon/>
  <span class="sr-only">Icon description</span>
</button>

</div> 



        </div>
        

        
    </div>
  )
}

export default Newcomplaints