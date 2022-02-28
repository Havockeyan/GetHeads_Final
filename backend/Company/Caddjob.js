const express=require('express')
const mongoose = require('mongoose')
const Router=express.Router()
const Jobschema=mongoose.model('Jobschema')
const middlewareadmin=require('../public/middleware-Admin')

Router.post('/addjob',middlewareadmin,(req,res)=>{
    var {name,title,desc}=req.body

    if(!name || !title || !desc)
    {
        res.json({
            error:"Please fill all the Fields Properly to Post the Job!!"
        })
        res.status(421)
    }
    else
    {
        var insertjob=new Jobschema({
            name,
            title,
            desc,
            username: req.admin.name 
        })

        insertjob.save()
        .then((data)=>{
            
            if(!data)
            {
                res.json({
                    error:"Job Post not found!!"
                })
                res.status(421)
                
            }
            else
            {
                res.json({
                    Success:"Job Post Successfully Posted!!" ,               
                })
                req.addjob=data
                res.status(200)
               
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
})

Router.get('/addjob',middlewareadmin,(req,res)=>{
    var ad=req.admin.name
    res.json(ad);
})


module.exports=Router


