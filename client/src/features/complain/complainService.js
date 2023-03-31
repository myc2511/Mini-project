import axios from 'axios'
const API_URL='/api/complain/'
//Register Complain
const register=async(data,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.post(API_URL+'register',data,config)
  
    return response.data;
}
//
const fetchPublicComplain=async()=>{
    
    const response=await axios.get(API_URL+'PublicComplain')
   //  console.log(response)
    return response.data;
}
const getAllUserComplain=async(token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(API_URL,config)
   //  console.log(response)
    return response.data;
}
const getsingleComplain=async(id,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    // // 
    //console.log(id);
    const response=await axios.get(API_URL+`/compl/${id}`,config)
   // console.log(response.data)
    return response.data;
}
const complainService={
    register,fetchPublicComplain,getAllUserComplain,getsingleComplain
}
export default complainService