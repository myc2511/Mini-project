import React from 'react'

function AdminStaff() {
  return (
    <div>      
 <AdminNav/>

<div class="relative  overflow-x-auto shadow-md sm:rounded-lg m-auto w-2/3 mt-16">
{/* <p className='text-center text-3xl'>All Complains</p> */}
    <table class="w-full text-m text-left text-gray-500  dark:text-gray-400">
        <thead class="text-l text-gray-700 uppercase bg-custom-grey dark:bg-gray-700 dark:text-gray-400">
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
                    Hostel
                </td>
                <td className="px-6 py-4">
                    Accepted
                </td>
                <td className="px-6 py-4">
                    Mohammad Shafiuddin
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
                    Hostel
                </td>
                <td className="px-6 py-4">
                    Accepted
                </td>
                <td className="px-6 py-4">
                    Mohammad Shafiuddin
                </td>
            </tr>
           </tbody>
    </table>
</div>
</div> 
  )
}

export default AdminStaff