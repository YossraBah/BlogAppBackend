const express = require('express')
const cors = require("cors");
require('./config/dbConnection')


const blogRoutes = require('./routes/blogRoutes')
const app = express()
app.use(cors('*'))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/blogs',blogRoutes)

PORT = 5000
app.listen(PORT,()=>{
    console.log("Serverrunning on port : " + PORT)
})