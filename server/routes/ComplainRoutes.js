const express=require('express')
const router=express.Router();
const {protect}=require("../middleware/authmiddleware")
const {registerComplain,assignComplaint, getComplain,deleteComplain,getAllComplain,getPublicComplain,getEveryComplain, escalateComplaint, closeComplaint} =require('../controllers/complainController');

router.get('/compl/:_id',protect,getComplain);
router.delete('/delete/:_id',deleteComplain);
router.put('/assignComplain/:_id',protect,assignComplaint)
router.post('/register',protect,registerComplain);
router.put('/escalateComplain/:_id',protect,escalateComplaint);
router.put('/closeComplain/:_id',protect,closeComplaint);

router.get('/',protect,getAllComplain);
router.get('/allComplain',getEveryComplain);
router.get('/PublicComplain',getPublicComplain);
module.exports=router