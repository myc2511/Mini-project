import axios from 'axios'
const API_URL='/api/complain/comments'


//Post Comment
const send=async(data,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.post(API_URL+'/send',data,config)
  
    return response.data;
}

const getComment=async(id,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(API_URL+`/${id}`,config)
  
    return response.data;
}

const commentService={
   send,getComment
}
export default commentService