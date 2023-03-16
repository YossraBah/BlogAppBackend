const mongoose = require('mongoose')

const URI = "mongodb+srv://yossraBahloul:Yosra4070@cluster0.s2arvaz.mongodb.net/?retryWrites=true&w=majority"

module.exports = mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("database connected successfully!!")
}).catch(err=>{
    console.log("error :" + err)
})