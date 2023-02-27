import React from 'react'
import AdminNav from './AdminNav'
import AddIcon from '@mui/icons-material/Add';

function AdminStaff() {
  return (
    <div className='min-h-screen'>      
 <AdminNav/>
<div className="container flex flex-col mx-auto  ">
<div className='ml-auto justify-self-end'>
  <button className='bg-custom-blue  mr-10 edt-btn mt-36 mb-10 text-white text-sm  p-4 rounded-lg'>Add Staff<AddIcon/></button>
</div>

<div className='rounded-lg'>
    <table class="w-full  mx-auto text-m text-left text-gray-500  dark:text-gray-400">
        <thead class="text-l text-white uppercase  dark:bg-gray-700 dark:text-gray-400 mt-60">
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
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline text-2xl hover:underline inline-block  text-custom-blue' href="">Mohammad</a>
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
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                </td>
            </tr>
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline text-2xl hover:underline inline-block  text-custom-blue' href="">Mohammad</a>
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
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                </td>
            </tr>
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline text-2xl hover:underline inline-block  text-custom-blue' href="">Mohammad</a>
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
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                </td>
            </tr>
            <tr class="bg-blue-100 border-b text-black rounded-lg  dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <a  className='no-underline text-2xl hover:underline inline-block  text-custom-blue' href="">Mohammad</a>
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
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                </td>
            </tr>
            
           </tbody>
    </table>
    </div>
</div>
</div> 
  )
}

export default AdminStaff