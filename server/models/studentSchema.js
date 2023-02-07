const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    enrollmentNo:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    }
})
const Student=mongoose.model('STUDENT',studentSchema);
module.exports=Student;