const express=require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const Userschema=mongoose.model('Userschema')
const middleware=require('../public/middleware_all')

Router.get('/ulogout',middleware,(req,res)=>{
    var id=req.user.id
   console.log(id)
    Userschema.deleteOne({"_id":id})
    .then((data)=>{
        if(data)
        {
            res.json({
                success:"Log out Scuccessfull!!"
            })
            res.status=200
        }
        else
        {
            res.json({
                error:"No data Found!!"
            })
            res.status=404
        }
    })
   

})
module.exports=Router