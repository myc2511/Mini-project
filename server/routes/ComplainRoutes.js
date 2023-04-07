const express=require('express')
const router=express.Router();
const {protect}=require("../middleware/authmiddleware")
const {registerComplain,assignComplaint,getactiveComplaint, getComplain,deleteComplain,getAllComplain,getPublicComplain,getEveryComplain, escalateComplaint, closeComplaint, getnewComplaint} =require('../controllers/complainController');

router.get('/compl/:_id',getComplain);
router.delete('/delete/:_id',deleteComplain);
router.put('/assignComplain/:_id',assignComplaint)
router.post('/register',protect,registerComplain);
router.put('/escalateComplain/:_id',protect,escalateComplaint);
router.put('/closeComplain/:_id',protect,closeComplaint);
router.get('/newComplain/:Role',getnewComplaint);
router.get('/activeComplain/:Role',getactiveComplaint);
router.get('/',protect,getAllComplain);
router.get('/allComplain',getEveryComplain);
router.get('/PublicComplain',getPublicComplain);
module.exports=router