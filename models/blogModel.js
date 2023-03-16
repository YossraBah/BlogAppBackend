const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogTitle:{type:String,required:[true,"blog title Required"]},
    imageLink:{type:String,required:[true,"blog image link Required"]},
    blogDescription:{type:String,required:true},
    blogLink:{type:String,required:[true,"blog link Required"]},
},
{timestamps:true})

module.exports = mongoose.model("blog",blogSchema)
