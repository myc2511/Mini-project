import React,{useEffect} from 'react'
import FacultyNav from '../../components/FacultyNav'
import Newcomplaints from '../../components/Faculty/Newcomplaints'
import { useDispatch,useSelector } from 'react-redux';
import { getallnewComplain } from '../../features/complain/complainSlice';
function Newcomplains() {
  const dispatch=useDispatch();
  const { staff}=useSelector((state)=>state.staff)

  
  
  useEffect(() =>{
   // console.log(data)
    dispatch(getallnewComplain({Role:staff.Role}));
      //  dispatch(reset());
    
    }, [])
    const { allnewComplain,isError,isLoading,message}=useSelector((state)=>state.complain)
  return (
    <div>
        <FacultyNav homeclr='dark:text-gray-400' newcpl="dark:text-blue-400" activecpl='dark:text-gray-400' closedcpl="dark:text-gray-400"/>
    
        <div className=' container mx-auto my-40'>
        {allnewComplain?allnewComplain.map((k)=>( <Newcomplaints k={k}/>)):(<></>)}
          
       
        </div>
      
    </div>
  )
}

export default Newcomplains
