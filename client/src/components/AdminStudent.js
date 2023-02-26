import React from 'react'
import AdminNav from './AdminNav'
function AdminStudent() {
  return (
    <div>      
    <AdminNav/>
    <div className="flex ml-40 mr-20 content-center justify-center  dark:text-gray-700   mt-30">
        <div className=' '>
            <table className="w-full text-m text-left text-gray-500  dark:text-gray-700 mt-40">
      <thead className=" text-l text-gray-700 uppercase bg-custom-grey dark:bg-gray-700 dark:text-gray-400 mt-60">
        <tr>
          <th className='w-1/4'>Name</th>
          <th className='w-1/5'>Enrollment Number</th>
          <th className='w-1/5'>Email</th>
          <th className='w-1/6'>Mobile No</th>
          <th className='w-1/12'>Action</th>

        </tr>
      </thead>
      <tbody className=' break-word text-center'>
        <tr>
          <td className='pt-4 pb-4 p-4 text-md '>Mohammad Shafiuddin
          </td>
          <td className='pt-4 pb-4 p-4 text-md '>LCS2020053</td>
          <td className='pt-4 pb-4 p-4 text-md '>shafiuddin9155@gmail.com</td>
          <td className='pt-4 pb-4 p-4 text-md '>9572326138</td>

           <td className='pt-4 pb-4 p-4 text-md '><button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button></td>
        </tr>
     
      </tbody>
    </table>
        </div>
        </div>
        </div>
  )
}

export default AdminStudent