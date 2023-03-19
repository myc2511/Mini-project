const asyncHandler=require('express-async-handler');
const Comment=require('../models/comment');

const addComment=asyncHandler( async(req,res)=>{
   
    const {name,comment,photo,complain_id}=req.body;
   
     if(!name||!comment){
        res.status(400);
        throw new Error('Please add all data')
     }
  

    //Create Comment
     const comm= await Comment.create({
     name,
     comment,
     photo:[],
    complain_id,
       })
     if(comm){
        res.status(201).json({
            _id:comm.id,
            name:comm.name,
            complain_id:complain.complain_id,
          
  })
     }
     else{
        res.status(400)
        throw new Error('Invalid data')
     }
})