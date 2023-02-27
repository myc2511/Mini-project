import React from 'react'

function Chat() {
  return (
    <div className='container mx-auto bg-gray-200 mt-5 w-1/2'>
      <div className='p-5'>
        <div className='bg-gray-300 rounded-lg p-5 m-5'>
        <p className='text-blue-700'>Mohd Yasif Choudhary</p>
    <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p>Sir, I submitted a complaint about the water cooler in Hostel-1 that's not working. Can you provide me with an update on what's happening?</p> 
        <p className='text-right text-sm pt-2'> <span>Monday 27-02-23</span> 12:06:56</p>
        </div>

        <div className='bg-gray-300 rounded-lg p-5 m-5'>
        <p className='text-blue-700'>Hostel Manager</p>
    <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p>I can see that our maintenance team is already working on resolving the issue with the water cooler. They should be able to fix it soon. Is there anything else I can help you with?</p> 
        <p className='text-right text-sm pt-2'> <span>Tuesday 28-02-23</span> 18:06:56</p>
        </div>
        <div className='bg-gray-300 rounded-lg p-5 m-5'>
        <p className='text-blue-700'>Mohd Yasif Choudhary</p>
    <hr class="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p>That's good to hear. Do you know when it will be fixed by any chance?</p> 
        <p className='text-right text-sm pt-2'> <span>Tuesday 28-02-23</span> 18:06:56</p>
        </div>

        
       
      </div>

      <form className='p-3'>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-white-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-white-800">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="4" class="w-full p-3 text-sm text-gray-900 bg-white border-0 dark:bg-white-800 focus:ring-0 dark:text-gray dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           <div class="flex pl-0 space-x-1 sm:pl-2">
               
               <button type="button" class="inline-flex justify-center p-2 text-white-500 rounded cursor-pointer hover:text-white-900 hover:bg-gray-100 dark:text-white-400 dark:hover:text-white dark:hover:bg-white-600">
                   <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                   <span class="sr-only">Upload image</span>
               </button>
           </div>
       </div>
   </div>
</form>

    </div>
  )
}

export default Chat
