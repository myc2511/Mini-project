const asyncHandler=require('express-async-handler');
const Comment=require('../models/comment');

const addComment=asyncHandler( async(req,res)=>{
   
    const {desc,photo,complain_id}=req.body;
   
     if(!desc){
        res.status(400);
        throw new Error('Please add all data')
     }
  

    //Create Comment
     const comm= await Comment.create({
     desc,
     photo:photo,
    complain_id,
    user_id:req.student.id
       })
     if(comm){
        res.status(201).json({
            _id:comm.id,
            desc:comm.desc,
            complain_id:comm.complain_id,
            user_id:req.student.id
  })
     }
     else{
        res.status(400)
        throw new Error('Invalid data')
     }
})
const getallComment=asyncHandler(async(req,res)=>{
 
   try {
     
      const comments = await Comment.find({complain_id:req.params._id});
    
      res.status(200).json(comments);
    } 
    catch (err) {
      res.status(500).json(err);
    }
})
module.exports={addComment,getallComment}