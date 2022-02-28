const express=require('express')
const mongoose=require('mongoose')
const Userschema=mongoose.model("Userschema")
const Router=express.Router()
const middleware=require('../public/middleware_all')
  
Router.get('/uprofile',middleware,(req,res)=>{

    var id=req.user.id
    // var id='61ed29980bf5f219622c64a2'

    Userschema.findOne({
        _id:id
    })
    .then((data)=>{
        if(!data)
        {
            res.json({
                error:"User Data Missing!!"
            })
            res.status(404)
        }
        else
        {
                data._id=null
                data.pass=null
            res.json(data)
            res.status(200)
        }
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports=Router