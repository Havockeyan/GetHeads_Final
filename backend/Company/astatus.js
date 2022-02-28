const express=require('express')
const mongoose = require('mongoose')
const Applyschema = mongoose.model("Applyschema")
const Router=express.Router()
const middlewareadmin=require('../public/middleware-Admin')


Router.post('/status/:id',middlewareadmin,(req,res)=>{
    
    var uid=req.params.id
    console.log(uid)
    Applyschema.find().populate("compid", "")
    .then((data)=>{

       for(let i = 0; i < data.length; i++)
       {
           var usr=data[i].userid.toString()

           if(usr === uid  && data[i].compid.name === req.admin.name)
           {
               var sid=data[i]._id
               
               Applyschema.findByIdAndUpdate(sid,{$set:{status:req.body.msg}},(err,data)=>{

                   if(data)
                   {
                       res.json({
                           Success:"Message sent Successfully"
                       })
                   }
                   else
                   {
                    res.json({
                        error:"No Candidate Found"
                    })
                    
                   }

               })
           }
       }
 
    })
    
    })
    
module.exports=Router

