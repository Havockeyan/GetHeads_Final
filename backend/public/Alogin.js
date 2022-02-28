const express=require('express')
const mongoose=require('mongoose')
const Router=express.Router()
const Adminschema=mongoose.model("Adminschema")
const jwt=require('jsonwebtoken')


Router.post('/alogin',(req,res)=>{
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
        Adminschema.findOne({email:email})
        .then((result)=>{
            
                if(result.pass === pass )
                {
                    var token=jwt.sign({
                        id:result._id,
                        name:result.name,
                        email:result.email,
                        admin : "true",
                    },'key2000',{expiresIn:"1d"})
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
        .catch(err=>{
            res.json({
                error:"You Are Not an Authorized Admin "
            })
        })
    }
})  

module.exports=Router