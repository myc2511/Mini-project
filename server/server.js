const express=require("express")
const dotenv=require("dotenv")
const app=express();
app.use(express.json());

dotenv.config({path:'./config.env'});
//Database Connection
require('./db/config')

app.use('/api/students',require('./routes/studentRoutes'))
//const Student=require('./models/studentSchema');
const PORT=process.env.PORT;

//

//listening
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} `)
})