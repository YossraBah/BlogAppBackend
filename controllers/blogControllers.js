const blogModel = require('../models/blogModel')

const getBlogs = (req,res) =>{
    blogModel.find().then((result) =>{
        return res.status(200).send(result)
    }).catch((err)=>{
        return res.status(404).json({'ERR': err})
    })
}

const getBlogById = async (req,res) =>{
    await blogModel.findById(req.params.id).then((blog) =>{
        if(!blog){
            res.status(404).send("blog not found")
        }
        else return res.status(200).send(blog)
    }).catch((err)=>{
        return res.json({'ERR': err})
    })
}

const createBlog =  (req,res) =>{
    blogModel.create(req.body).then((result)=>{
        return res.status(201).json({'blog crée': result})
    }).catch((err)=>{
        return res.status(500).json({'ERR':err})
    })
}

const updateBlog =async  (req,res) =>{
   
    await blogModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((result)=>{
        return res.status(201).json({'blog modifié ': result})    
    }).catch((err)=>{
        return res.status(500).json({'ERR':err})
    })
}

const deleteBlog = async (req,res) =>{
    await blogModel.findByIdAndDelete(req.params.id).then((result)=>{
        return res.status(201).json({'blog supprimé ': result})     
    }).catch((err)=>{
        return res.status(500).json({'ERR':err})
    })
}

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
}
