const express=require('express')
const router=express.Router();
const {protect}=require("../middleware/authmiddleware")
const {registerComplain,getComplain,deleteComplain,getAllComplain,getPublicComplain} =require('../controllers/complainController');

router.post('/register',protect,registerComplain);
router.get('/get/:_id',protect,getComplain);
router.delete('/delete/:_id',deleteComplain);
router.get('/',protect,getAllComplain);
router.get('/PublicComplain',getPublicComplain);
module.exports=router