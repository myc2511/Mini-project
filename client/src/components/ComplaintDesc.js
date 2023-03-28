import React, { useEffect } from 'react'



function ComplaintDesc() { 
  return (
    <div>
      <div className=" w-full container mx-auto mt-10">
        <ol className="flex justify-center items-center w-full mb-4 sm:mb-5 ">
          <li className="flex w-full items-center text-gray-600 dark:text-gray-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-700">
            <div className="flex flex-col items-center mt-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  // className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Accepted</span>
            </div>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <div className="flex flex-col items-center mt-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Pending</span>
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex flex-col items-center mt-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-700">Completed</span>
            </div>
          </li>
        </ol>
      </div>

      <div className="w-1/2 mx-auto">

        <div>
        <h1 className="text-4xl text-center m-10 p-3 text-custom-blue">Water Cooler not Working (4th floor Hostel-1)</h1>
        <p>Submitted By : Mohammad Shafiuddin</p>
        <p>Email : example@gmail.com</p>
        <p>Rollno : LCS2020001</p>
        <p>Phone No : 89438498989</p>
        
        <p className="pt-10">Description:</p>
        <p className=" pb-10 text-gray-500">I am writing to report an issue with the water cooler in our Hostel. The water cooler appears to be malfunctioning and is not dispensing cold water.

Whenever I attempt to dispense water, the machine makes a low humming noise but no water comes out. Additionally, the water that is dispensed is warm, indicating that the cooling system is not functioning properly.

This issue is causing inconvenience to our staff, as we are unable to enjoy cold water during the day, especially during the warm weather.

I kindly request your immediate attention to this matter and would appreciate it if someone could come to our office to repair or replace the water cooler as soon as possible.

Thank you for your prompt attention to this matter.
        </p>
        </div>
        <p className="mb-3">Attachments:</p>
        <div>
          <div>
            <img
              src="https://assets.telegraphindia.com/telegraph/07bhrWater.jpg"
              alt=""
            />
          </div>
          <div className="flex p-3 ">
            <img
              className="w-1/4 h-56"
              src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2017/07/13/Pictures/_209512ce-67a0-11e7-ae46-9bfe7bf72e96.jpg"
              alt=""
            />
            <img
              className="w-1/4 h-56"
              src="https://i.pinimg.com/originals/b4/55/d8/b455d81a204e80765021a641832b0b09.jpg"
              alt=""
            />
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default ComplaintDesc
