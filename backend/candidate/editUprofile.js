const express=require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const Userschema=mongoose.model('Userschema')
const middleware=require('../public/middleware_all')

Router.post('/userupdate',middleware,(req,res)=>{
    var id=req.user.id

    Userschema.findByIdAndUpdate(id,{$set:req.body},(err,data)=>{
        if(data)
        {
            res.json({
                success:"User Updated Successfullly!!"
            })
            res.status=200
        }
        else
        {
            res.json({
                error:"No user Details Found!!"
            })
            res.status=404
        }
    })
})


module.exports=Router