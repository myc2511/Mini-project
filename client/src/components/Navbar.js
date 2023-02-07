import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between p-8 clr'>
        <img src='/'/>
        <ul className='flex wd'>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to='/Complaint'>Complaint</Link></li>
            <li><Link to='/SignUp'>Logout</Link></li>
            <li><Link to='/Userprofile'><img src="/" alt="User" /></Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
