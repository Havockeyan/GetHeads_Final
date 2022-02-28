const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Adminschema=mongoose.model("Adminschema")

// Router.post('/adminsignup',
module.exports = (req,res)=>{
    var {name,email,pass}=req.body
    var imgurl = req.file.filename;

    if(!name || !email || !pass)
    {
        res.json({
            error:"Please fill all the Fields Properly to Sign-up!!"
        })
        res.status(421)
    }
    else if(pass.length<8)
    {
    res.json({
        error:"Password Length Must Be Greater than or Equal to 8"
    })
    res.status(421) 
    }
    else
    {
        var register=new Adminschema({
            name,
            email,
            pass,
            Admin:true,
            imgurl
        })

        register.save()
        .then((data)=>{
            if(data)
            {
                res.json({
                   Success:"Company Registration Scuccessfull!!"
                })
                res.status(200) 
            }
            else
            {
                res.json({
                    error:"No data Found or Missing!!"
                 })
                 res.status(404) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

// module.exports=Router