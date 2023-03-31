const mongoose=require("mongoose");
const complain=new mongoose.Schema({
       title:{
        type:String,
        required:true
       },
       desc:{
        type:String,
        required:true
       },
       photo:{
        type:Array,
       },
       status:{
        type:String,
       },
       comments:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'COMMENT'
        }
       ],
       user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'STUDENT'
       },
       complain_type:{
        type:String,
        required:true,
       },
       
       complain_regarding:{
        type:String,
        required:true,
       }
},
{
    timestamps: true
    
}
)
const Complain=mongoose.model('COMPLAIN',complain);
module.exports=Complain;