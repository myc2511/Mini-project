import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import SingleBlogCmpln from '../components/SingleBlogCmpln'
import { fetchPublic } from '../features/complain/complainSlice';
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { reset } from "../features/complain/complainSlice";
import { useEffect } from "react";

function Blog() {
 
 const dispatch=useDispatch();
 
  const {publicComplain,isError,isSuccess,message}= useSelector(
    (state)=> state.complain )
  
  useEffect(() =>{

dispatch(fetchPublic());
   dispatch(reset());

}, [isError,dispatch])
  
  return (
    <div>
    <Navbar/>
    <div className='mt-40 mb-28'>
    {publicComplain?publicComplain.map((p)=>(
      <SingleBlogCmpln  title={p.title} desc={p.desc} cmpln={p.complain_regarding} ticketno={p._id} key={p}/>
    
   )):  <><div>No complain </div></>}
  

    </div>
    </div>
  )
}

export default Blog
