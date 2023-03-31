const asyncHandler=require('express-async-handler');
const Complain = require('../models/complain');
const Student=require('../models/studentSchema')


const registerComplain=asyncHandler( async(req,res)=>{
   
    const {title,desc,photo,status,complain_type,user_id,complain_regarding}=req.body;
   
     if(!title||!desc||!complain_type||!complain_regarding){
        res.status(400);
        throw new Error('Please add all data')
     }
    

    //Create Complain
     const complain= await Complain.create({
     title,
     desc,
     photo,
      status:"Open",
      comments:[],
      user_id:req.student.id,
      complain_type,
      complain_regarding,
    
     })
     if(complain){
        res.status(201).json({
            _id:complain.id,
            title:complain.title,
            desc:complain.desc,
            complain_type:complain.complain_type,
            complain_regarding:complain.complain_regarding,
          
  })
     }
     else{
        res.status(400)
        throw new Error('Invalid data')
     }
})
//Delete Complain

const deleteComplain=asyncHandler(async(req,res)=>{
  
   try {
      const compl = await Complain.findById(req.params._id);
      const user=await Student.findById(compl.user_id);
     if (user.name === req.body.user) {
        try {
          await compl.delete();
          res.status(200).json("Complain has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
})
//Get Complain
const getComplain=asyncHandler(async(req,res)=>{
 
   try {
     
      const compl = await Complain.findById(req.params._id);
    
      res.status(200).json(compl);
    } 
    catch (err) {
      res.status(500).json(err);
    }
})
//Get complain of user

const getAllComplain=asyncHandler(async(req,res)=>{
  const userid = req.student.id;
 
  try {
    let complains;
    if (userid) {
      complains = await Complain.find({ user_id:userid }).sort({ createdAt: 'desc'}).exec();
    }  else {
      complains = await Complain.find();
    }
    res.status(200).json(complains);
  } catch (err) {
    res.status(500).json(err);
  }
 
})
const getPublicComplain=asyncHandler(async(req,res)=>{
  
  try {
    let complains;

      complains = await Complain.find({complain_type:"Public"}).sort({ createdAt: 'desc'}).exec();;
    
    res.status(200).json(complains);
  } catch (err) {
    res.status(500).json(err);
  }
 
})
module.exports={registerComplain,deleteComplain,getComplain,getAllComplain,getPublicComplain}