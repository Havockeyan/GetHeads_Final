const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
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
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    fresher:{
        type:Boolean,
        default:false,
        required:true
    },
    imgurl:{
        type:String,
        required:true
    }
})

exports.Userschema=mongoose.model("Userschema",Userschema)