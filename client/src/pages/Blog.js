import React from 'react'
import Navbar from '../components/Navbar'
import SingleBlogCmpln from '../components/SingleBlogCmpln'

function Blog() {
  return (
    <div>
    <Navbar/>
    <div className='mt-40 mb-28'>
    <SingleBlogCmpln/>
      <SingleBlogCmpln/>
      <SingleBlogCmpln/>
      <SingleBlogCmpln/>
      <SingleBlogCmpln/>

    </div>
    </div>
  )
}

export default Blog
