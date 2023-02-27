import React from "react";
import ComplaintDesc from './ViewComplaints/ComplaintDesc';
import Chat from './ViewComplaints/Chat';
import { useState } from "react";

function ViewComplaint() {
  const [showComnt,setshowCmnt]=useState(false);
  return (
    <div className="mt-28">
      <div className="text-center">
        <button
        onClick={()=>{
          setshowCmnt(false);
        }}
          type="button"
          className="w-1/2  border items-center p-5 text-xl font-medium  text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Complaint Description
        </button>
        <button
         onClick={()=>{
          setshowCmnt(true);
        }}
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
        {!showComnt?<ComplaintDesc/>: <Chat/>}
          </div>


      
    </div>
  );
}

export default ViewComplaint;
