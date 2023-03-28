const express=require("express")
const dotenv=require("dotenv")
const app=express();
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({path:'./config.env'});
//Database Connection
require('./db/config')

app.use('/api/students',require('./routes/studentRoutes'))
app.use('/api/complain',require('./routes/ComplainRoutes'))

const PORT=process.env.PORT;

//

//listening
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} `)
})