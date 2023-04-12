import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleComplain } from "../features/complain/complainSlice";
import { useParams } from "react-router-dom";

function ComplaintDesc() {
  let [modalIsOpen, setmodalIsOpen] = useState("hidden");
   const [btndata,setbtndata]=useState("")
  const handleModal = () => {
    setmodalIsOpen("hidden");
    if(btndata==="Close"){
      closeComplain();
    }
    else
    escalteCmpln();
  };
   
  const id = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleComplain(id));
  }, [id, dispatch]);
  const { SingleComplain } = useSelector((state) => state.complain);
  const { user } = useSelector((state) => state.auth);
  if (!SingleComplain) {
    return <p>Loading...</p>;
  }
  const checktimeforEsclation=()=>{
    const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; 
   // console.log(SingleComplain.assigned)
   const l=SingleComplain.assigned.length;
 const lastAssigntime = SingleComplain.assigned[l-1].time;
// console.log(lastAssigntime)
 const assignedDate = new Date(lastAssigntime.time);

if ( 
    (Date.now() - assignedDate.getTime() < ONE_WEEK)) {
  // disable the esclate button
  console.log(Date.now() - assignedDate.getTime())
} else {
  // enable the esclate button
}
  }
  checktimeforEsclation();
  const escalteCmpln = async () => {
   
    const url = `http://localhost:5000/api/complain//escalateComplain/${SingleComplain._id}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ department: SingleComplain.complain_regarding }),
    });
    const res = await response.json();
   
  };
  const  closeComplain = async () => {
    
    const url = `http://localhost:5000/api/complain/closeComplain/${SingleComplain._id}`;
  
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    
    });
    const res = await response.json();
  
  };
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

      <div className="w-2/3 mx-auto px-20 py-5 mb-36 bg-gray-200 rounded-lg ">
        <div>
          <div>
            <div className={`${modalIsOpen} model box-shadow`}>
              <div className="overlay"></div>

              <div
                id="popup-modal"
                tabindex="-1"
                className={`fixed flex justify-center items-center z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}
              >
                <div className="relative w-full h-full max-w-md md:h-auto">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
                    <button
                      onClick={() => {
                        setmodalIsOpen("hidden");
                      }}
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-4 text-white-400 w-14 h-14 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-white dark:text-white-400">
                        Are you sure you want to {btndata} this complaint?
                      </h3>

                      <button
                        onClick={handleModal}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                      >
                        Yes, {btndata}
                      </button>

                      <button
                        onClick={() => {
                          setmodalIsOpen("hidden");
                          setbtndata("")
                        }}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-800 dark:text-white dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-900 dark:focus:ring-gray-600"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
            <h1 className="text-4xl text-center m-10 p-3 text-custom-blue">
              {" "}
              {SingleComplain.title}
            </h1>
            </div>
            <div>
            {!user && SingleComplain.status!=="Closed" ?(<button 
         onClick={()=>{setmodalIsOpen('')
         setbtndata("esclate")
         }}
          className="bg-blue-700  mr-5 edt-btn mt-10 mb-10 text-white text-sm  p-4 rounded-lg"> Escalate Complain</button>):<></>}
            {!user && SingleComplain.status!=="Closed" ?(<button 
         onClick={()=>{setmodalIsOpen('')
         setbtndata("Close")
         }}
          className="bg-blue-700  mr-5 edt-btn mt-10 mb-10 text-white text-sm  p-4 rounded-lg"> Close Complain</button>):<></>}
            </div>
            
            
          </div>
          <p>Submitted By : Mohammad Shafiuddin</p>
          <p>Email : example@gmail.com</p>
          <p>Rollno : LCS2020001</p>
          <p>Phone No : 89438498989</p>

          <p className="pt-10 ">Description:</p>

          <p className=" pb-10 text-gray-500">{SingleComplain.desc}</p>
        </div>
        <p className="mb-3">Attachments:</p>

        <div className="m-10">
          <div>
            <img
              src="https://assets.telegraphindia.com/telegraph/07bhrWater.jpg"
              alt=""
            />
          </div>
          <div className="flex">
            <div className="w-1/4 m-2">
            <img className="h-72"
              src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2017/07/13/Pictures/_209512ce-67a0-11e7-ae46-9bfe7bf72e96.jpg"
              alt=""
            />
            </div>
            
            <div className="w-1/4 m-2">
            <img className=" h-72 "
              src="https://i.pinimg.com/originals/b4/55/d8/b455d81a204e80765021a641832b0b09.jpg"
              alt=""
            />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintDesc;
