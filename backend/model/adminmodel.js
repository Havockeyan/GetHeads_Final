const mongoose=require('mongoose')

const Adminschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique : true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    Admin:{
        type:String,
        default:true,
    },
    imgurl:{
        type:String,
        required:true
    }
    
})

exports.Adminschema=mongoose.model("Adminschema",Adminschema)