import React from 'react'
import {Link} from 'react-router-dom';

function AdminNav() {
  return (
<div className='flex justify-between p-8 clr'>
        <img src='/'/>
        <ul className='flex'>
        <li><Link to='/Admin/Home'>Home</Link></li>
        <li><Link to='/Admin/Complain'>Complaint</Link></li>
          <li><Link to='/Admin/Student'>Students</Link></li>
        <li><Link to='/Admin/Staff'>Staffs</Link></li>
            <li><Link to=''>Logout</Link></li>
            <li><Link to='/'><img src="/" alt="User" /></Link></li>
        </ul>
      
    </div>  )
}

export default AdminNav