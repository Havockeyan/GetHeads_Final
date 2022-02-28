const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Userschema=mongoose.model("Userschema")
// const upload = require('./../server').upload;

// Router.post('/usersignup' ,
module.exports = (req,res)=>{
    var {name,email,pass,age,dob,address,exp,fresher}=req.body
    var imgurl = req.file.filename;
   

    if(!name || !email || !pass || !age || !dob || !address || !exp )
    {
        res.json({
            error:"Please fill all the Fields Properly to Signup!!"
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
        var register=new Userschema({
            name,
            email,
            pass,
            age,
            dob,
            address,
            fresher,
            exp,
            imgurl
        })

        register.save()
        .then((data)=>{
            if(data)
            {
                res.json({
                   Success:"Registration Scuccessfull!!"
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
// })

// module.exports=Router