const express=require('express')
const mongoose=require('mongoose')
const Userschema=mongoose.model('Userschema')
const jwt=require('jsonwebtoken')

module.exports=((req,res,next)=>{
    var token=req.headers.token
    if(!token)
    {
        res.json({
            error:"You are not an Authorized user Sign up First!!"
        })
        res.status(401)
    }
    else
    {
        jwt.verify(token,'key1000',(err,data)=>{
            if(data)
            {
                req.user = data;
                next();
            }
            else
            {
                res.json({
                    error:"You Are Not an Authorized User-Login First!!"
                })
                res.status(421)
            }
        })
    }
})
