const express=require("express")
const dotenv=require("dotenv")
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({path:'./config.env'});
//Database Connection
require('./db/config')

app.use('/api/students',require('./routes/studentRoutes'))
app.use('/api/complain',require('./routes/ComplainRoutes'))
app.use('/api/admin',require('./routes/Admin'))
app.use('/api/staff',require('./routes/Staff'))


const PORT=process.env.PORT;

//

//listening
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT} `)
})