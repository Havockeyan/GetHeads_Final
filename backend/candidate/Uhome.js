const express=require('express')
const mongoose = require('mongoose')
const Router=express.Router()
const middleware=require('../public/middleware_all')
const Jobschema=mongoose.model("Jobschema")


Router.get('/uhome',middleware,(req,res)=>{
    var ur=req.user.name;
   
    Jobschema.find()
    .then((data)=>{
        if(data)
        {
            res.json({
                data,
                ur
            })
        }
        else
        {
            res.json({
                error:"NO jobs found!!"
            })
            res.status(404)
        }
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=Router