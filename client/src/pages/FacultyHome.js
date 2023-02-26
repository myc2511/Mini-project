import React,{useState} from 'react'
// import Singlecmpln from '../components/Singlecmpln';
import FacultyNav from '../components/FacultyNav';
import ViewComplaint from '../components/ViewComplaint';

function FacultyHome() {
  
//     const [showing,setshowing]=useState(false);
//     const [name,setname]=useState("Shafi");
    return (
  <div className='flex flex-col min-h-screen'>    <FacultyNav/>
  <ViewComplaint/>
{/* 
//       <div className='mt-40 flex'>   
  
//     <div className="parent  m-auto mt-20 flex flex-row">
//       <div className= " m-5 bio basis-1/3">
//          <img src="/avatar.png" className="w-40 m-3"   alt=" profile img"/>
//          <p className='p-1'>Name : Mohammad Shafiuddin</p>
//          <p className='p-1'>Enrollment No: LCS2020053</p>
//          <p className='p-1'>Email : shafiuddin9155@gmail.com</p>
//          <p className='p-1'>Mobile No:9572326138</p>
//            <button className="bg-custom-blue edt-btn mt-5 text-white text-sm  p-2 rounded-lg" onClick={() => setshowing(true)}>Edit Profile</button>
//          <div className={showing?"block":"hidden"} >
//               <label for="">
//                   <span className='mt-2 mb-1 inline-block'>Name</span>
//                   <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
//               </label>
//               <label for="">
//                   <span className='mt-2 mb-1 inline-block'>Mobile No</span>
//                   <input className='border-2 border-slate-400 w-full p-1 rounded-lg' type="text"/>
//               </label>
//               <label for="">
//                   <span className='mt-2 mb-1 inline-block'>Change Photo</span>
//                   <input className='border-2 mb-4 border-slate-400 w-full p-1 rounded-lg' type="file"/>
//               </label>
//              <button className='bg-custom-blue text-white text-sm  m-2 p-3 rounded-lg'>Save</button>
//              <button onClick={() => setshowing(false)} className='bg-custom-grey text-black text-sm  m-2 p-3 rounded-lg'>Cancel</button>
//            </div>
           
//       </div>
//       <div className='basis-2/3'> */}

{/* //         <h2 className='text-2xl'>All Complaints</h2>
//       <Singlecmpln/>
//       <Singlecmpln/>
      
  
  
//       </div> */}
{/* //     </div> 
//       </div>

//      <div className='mt-auto'>

//      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
//     <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
//     </span>
//     <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
//         <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
//         </li>
//         <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
//         </li>
//         <li>
//             <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
//         </li>
//         <li>
//             <a href="#" class="hover:underline">Contact</a>
//         </li>
//     </ul>
// </footer>

// </div>  */}

      </div>
    )
}

export default FacultyHome
