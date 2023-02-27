import React from 'react';
import AdminNav from './AdminNav'

function AdminCompTable() {
  return (
    <div className='min-h-screen'>      
 <AdminNav/>

<div className=" container flex mx-auto content-center justify-center  mt-60">
{/* <p className='text-center text-3xl'>All Complains</p> */}
    <table class="w-full  mx-auto text-m text-left text-gray-500  dark:text-gray-400">
        <thead class="text-l text-white uppercase  dark:bg-gray-700 dark:text-gray-400 mt-60">
            <tr>
                <th scope="col" className="px-6 py-3">
                TicketNo
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Complain Related
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">STD12355656</a>
                </th>
                <td className="px-6 py-4">
                <a href="/SingleComplaint" className='hover:underline text-custom-blue'>Title 1</a>
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
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">STD12355656</a>
                </th>
                <td className="px-6 py-4">
                <a href="/SingleComplaint" className='hover:underline text-custom-blue'>Title 2</a>
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
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">STD12355656</a>
                </th>
                <td className="px-6 py-4">
                <a href="/SingleComplaint" className='hover:underline text-custom-blue'>Title 3</a>
                </td>
                <td className="px-6 py-4">
                    Hostel
                </td>
                <td className="px-6 py-4">
                    Accepted
                </td>
                <td className="px-6 py-4">
                    Aman Gangwar
                </td>
            </tr>
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline hover:underline inline-block  text-custom-blue' href="">STD12355656</a>
                </th>
                <td className="px-6 py-4">
                <a href="/SingleComplaint" className='hover:underline text-custom-blue'>Title 4</a>
                </td>
                <td className="px-6 py-4">
                    Hostel
                </td>
                <td className="px-6 py-4">
                    Accepted
                </td>
                <td className="px-6 py-4">
                    Mohd yasif 
                </td>
            </tr>
           
        
          
        </tbody>
    </table>
</div>

    
    </div> 
  )
}

export default AdminCompTable
