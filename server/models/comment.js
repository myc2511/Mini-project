const mongoose=require('mongoose');
const comment=new mongoose.Schema({
   
    desc:{
        type:String,
        required:"true"
    },
    photo:{
        type:Array,
    },
    complain_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'COMPLAIN'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'STUDENT'
    }
},{
    timestamps: true
    
})
const Comment=mongoose.model('COMMENT',comment);
module.exports=Comment;