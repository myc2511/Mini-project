const mongoose=require('mongoose');
const comment=new mongoose.Schema({
    name:{
        type:String,
        required: "this field is required"
    },
    comment:{
        type:String,
        required:"true"
    },
    photo:[{
        type:String,
    }],
    complain_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'COMPLAIN'
    }
},{
    timestamps: true
    
})
const Comment=mongoose.model('COMMENT',comment);
module.exports=Comment;