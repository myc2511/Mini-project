const express=require('express')
const router=express.Router();
const {protect}=require("../middleware/authmiddleware")
const {addComment, getallComment} =require("../controllers/commentController")
router.post('/send',protect,addComment);
router.get('/:_id',protect,getallComment);
module.exports=router