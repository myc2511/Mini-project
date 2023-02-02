import React from 'react'
// import './Navbar.css'

function Navbar() {
  return (
    <div className='flex justify-between p-8 clr'>
        <img src='/'/>
        <ul className='flex wd'>
            <li><a href='\'>Blog</a></li>
            <li><a href='\'>Complaint</a></li>
            <li><a href='\'>Logout</a></li>
            <li><a href=''><img src="/" alt="User" /></a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
