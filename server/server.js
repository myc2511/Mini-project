const express=require("express")
const dotenv=require("dotenv")
const app=express();

dotenv.config({path:'./config.env'});
//Database Connection
require('./db/config')

//const Student=require('./models/studentSchema');
const PORT=process.env.PORT;

//listening
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} `)
})