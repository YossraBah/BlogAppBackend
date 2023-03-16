const express = require("express")
const router = express.Router()
const methods = require('../controllers/blogControllers')


router.get('/getBlogs',methods.getBlogs)
router.get('/:id', methods.getBlogById)
router.post('/addBlog', methods.createBlog)
router.put('/updateBlog/:id', methods.updateBlog)
router.delete('/deleteBlog/:id', methods.deleteBlog)


module.exports = router