const express = require('express')
const mongoose = require('mongoose')
const Router = express.Router()
const Applyschema = mongoose.model("Applyschema")
const middleware = require('../public/middleware-Admin')

Router.get('/vprofile/:id',middleware,(req,res)=>
{
    var id=req.params.id
    Applyschema.findOne({userid:id}).populate("userid", "name email age dob address exp fresher" )
    .then((data)=>{
        var a=[]
        a=data.userid
        res.json(a)
    })
    .catch((err)=>{
        consol.log(err)
    })
})

module.exports=Router