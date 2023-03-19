const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const asyncHandler=require('express-async-handler');
const Student = require('../models/studentSchema');
//desc Register new User
//route POST /api/student
//access Public
const registerStudent=asyncHandler(async(req,res)=>{
    const {name,email,enrollmentNo,password,mobileNo}=req.body;
    console.log(req.body);
     if(!email||!name||!enrollmentNo||!password  ||!mobileNo){
        res.status(400);
        throw new Error('Please add all data')
     }
     //check user exists
     const studentExist=await Student.findOne({email});
     if(studentExist){
           res.status(400)
           throw new Error('User Already exist');
     }
     //hash password
     const salt=await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(password,salt)

     //create user
     const student= await Student.create({
     name,
     enrollmentNo,
     email,
     password:hashedPassword,
     mobileNo
     })
     if(student){
        res.status(201).json({
            _id:student.id,
            name:student.name,
            enrollmentNo:student.enrollmentNo,
            email:student.email,
            mobileNo:student.mobileNo,
            token:generateToken(student.id)
  })
     }
     else{
        res.status(400)
        throw new Error('Invalid user data')
     }
})
//desc Authenticate User
//route post /api/students/login
//access Public
const loginStudent=asyncHandler( async(req,res)=>{
    const {email,password}=req.body;
   
    const student= await Student.findOne({email});
   
     if(student&& (await bcrypt.compare(password,student.password)))
     {
        res.json({
            _id:student.id,
            name:student.name,
            enrollmentNo:student.enrollmentNo,
            email:student.email,
            mobileNo:student.mobileNo,
           token:generateToken(student.id)
        })}
     else{
        res.status(400)
        throw new Error('Invalid credentials')
     }
    
})
//desc Get User data
//route POST /api/students/me
//access Private
const getStudent=asyncHandler( async(req,res)=>{
    const {id,name,email,enrollmentNo,password,mobileNo}=await Student.findById(req.student.id);
    res.status(200).json({
        _id:id,
        name,
        enrollmentNo,
        email,
        mobileNo
    })
     
    res.json({message:"User data display"})
})


//Generate Token
const generateToken=(id)=>{
    console.log(id);
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}
module.exports={registerStudent,getStudent,loginStudent}