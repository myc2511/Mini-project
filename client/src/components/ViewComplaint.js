import React from "react";
import ComplaintDesc from './ViewComplaints/ComplaintDesc';
import Chat from './ViewComplaints/Chat';

function ViewComplaint() {
  return (
    <div className="mt-28">
      <div className="text-center">
        <button
          type="button"
          className="w-1/2  border items-center p-5 text-xl font-medium  text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Complaint Description
        </button>
        <button
          type="button"
          className="w-1/2  items-center  p-5 text-xl font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comment
          <span class="inline-flex items-center justify-center p-3 h-4 ml-2 text-lg font-semibold text-blue-800 bg-blue-200 rounded-full">
            2
          </span>
        </button>
      </div>

        <div className="mb-16">
      {/* <ComplaintDesc/> */}
      <Chat/>
        </div>

        
<footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

      
    </div>
  );
}

export default ViewComplaint;
