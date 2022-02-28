const mongoose=require('mongoose')
const { Adminschema } = require('./adminmodel')

const Jobschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required : true
    },
    imgurl:{
        ref:Adminschema,
        type:String
    }
})

exports.Jobschema=mongoose.model("Jobschema",Jobschema)