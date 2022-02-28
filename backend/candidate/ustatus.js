const express=require('express')
const mongoose=require('mongoose')
const Applyschema=mongoose.model("Applyschema")
const Router=express.Router()
const middleware=require('../public/middleware_all')

Router.get('/ustatus',middleware,(req,res)=>{
    var id=req.params.id
    console.log(id)
    //  Applyschema.findOne({
    //     $and: [{userid:req.user.id},{compid:id}]
    //     }).populate("compid", "name")
    //     .then((data)=>{
    //         var status=data.status
    //       var comp=data.compid.name
          
    //         res.json({
    //             status,
    //             comp
    //         })
            
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    Applyschema.find({userid:req.user.id})
    .populate("compid", "name")
    .then(data=>{
        // console.log(data)
        res.status(200).json({data: data})
    })
    // .then(data=>{
    //    data.map((data) => {
        
    //    })
    // })
    
})

module.exports=Router