const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Userschema=mongoose.model("Userschema")
const jwt=require('jsonwebtoken')

Router.post('/login',(req,res)=>{
    var {email,pass}=req.body

    
    if(!pass || !email)
    {
        res.json({
            error:"Please fill all the Fields Properly to Log-In!!"
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
        Userschema.findOne({email:email})
        .then((result)=>{
                if(result.pass === pass )
                {
                    var token=jwt.sign({
                        id:result._id,
                        name:result.name,
                        email:result.email
                    },'key1000',{expiresIn:"1d"})
                    res.json({
                        token:token
                    })
                }
                else
                {
                    res.json({
                        error:"Incorrect Password!!"
                    })
                }
            
        })
        .catch((err)=>{
            res.json({
                error:"Incorrect Email or Signup first!!"
            })
        })
    }
})  

module.exports=Router