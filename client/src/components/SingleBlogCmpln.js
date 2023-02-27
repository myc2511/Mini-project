import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function SingleBlogCmpln(){

return(

    <div className="container mx-auto w-4/6 ">

        
        <div className="p-2  m-5 rounded-2xl box-shadow cmpln flex">
        <div className="m-auto w-36 flex flex-col items-center"> 
        <button type="button" class="hover:bg-gray-300 rounded-full ">
            <ArrowDropUpIcon sx={{
     
      fontSize:"50px"
         
  }}/>
  <span class="sr-only">Icon description</span>
</button>
<p className="">12</p>
<button type="button" class="hover:bg-gray-300 rounded-full ">
            <ArrowDropDownIcon sx={{
     
      fontSize:"50px"
         
  }}/>
  <span class="sr-only">Icon description</span>
</button>
        </div>

        <div>
        <a href="/SingleComplaint" className="no-underline hover:underline p-4 inline-block text-3xl text-custom-blue " >Title</a>
        <span className="  rounded-full pl-2 pr-2 mt-2 mr-3 text-lg  float-right border-2 border-custom-grey">Public</span>
        <span className='pl-4  text-sm block'>Ticket No: </span>
        <p className="pl-4 text-sm mt-1">Complain Related: Hostel</p>

        <p className="pl-4 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam illum, sunt magnam enim doloremque autem, porro asperiores nihil maiores, voluptate repudiandae labore quis repellendus? Temporibus nobis voluptas quis enim? ores nihil maiores, </p>
        {/* <div> */}
        {/* <ArrowUpwardIcon/>
         */}
        {/* <img src={img} alt="" /> */}
        {/* </div> */}
        <ol class="flex justify-center items-center w-full mb-4 sm:mb-5 ">
          <li class="flex w-full items-center text-gray-600 dark:text-gray-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-700">
            <div className="flex flex-col items-center mt-5">
              <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Accepted</span>
            </div>
          </li>
          <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <div className="flex flex-col items-center mt-5">
              <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Pending</span>
            </div>
          </li>
          <li class="flex items-center">
            <div className="flex flex-col items-center mt-5">
              <div class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Completed</span>
            </div>
          </li>
        </ol>
        <span className="m-4 inline-block text-sm">Date at Time</span>

        
    </div>
    </div>
    </div>
)
}
export default SingleBlogCmpln