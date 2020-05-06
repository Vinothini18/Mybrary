const express=require('express')
const router=express.Router()
//all books
router.get('/',(req,res)=>{
    res.render('book/index')
})
//new author
router.get('/new',(req,res)=>{
    res.render('book/new')
})//create author route
router.post('/',(req,res)=>{
    res.send('Create')
})

module.exports=router