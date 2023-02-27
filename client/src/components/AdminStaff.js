import React from 'react'
import AdminNav from './AdminNav'
function AdminStaff() {
  return (
    <div>      
 <AdminNav/>

< div classname="flex mx-auto content-center justify-center  mt-60">
{/* <p className='text-center text-3xl'>All Complains</p> */}
    <table class="w-full text-m text-left text-gray-500  dark:text-gray-400 mt-60">
        <thead class="text-l text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 mt-60">
            <tr>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                Mobile Number
                </th>
                <th scope="col" className="px-6 py-3">
                Role
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
                   </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">Mohammad</a>
                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                    876XXX
                </td>
                <td className="px-6 py-4">
                    MESS MANAGER
                </td>
                <td className="px-6 py-4">
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Accept</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">STD12355656</a>
                </th>
                

                <td className="px-6 py-4">
                Lorem Ipsum is simply dummy text 
                </td>
                <td className="px-6 py-4">
                    345868xxx
                </td>
                <td className="px-6 py-4">
                    MANAGER
                </td>
                <td className="px-6 py-4">
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Accept</button>
                </td>
            </tr>
           </tbody>
    </table>
</div>
</div> 
  )
}

export default AdminStaff