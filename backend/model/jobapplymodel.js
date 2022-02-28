const mongoose=require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const Applyschema = new mongoose.Schema({
    compid:{
        type:ObjectId,
        required:true,
        ref:"Jobschema"
    },
    userid:{
        type:ObjectId,
        required:true,
        ref:"Userschema"  
    },
    status:{
        type:String,
        required:true
    },
    mcq : { 
        type :Array,
        "default" : [] 
    }
})

exports.Applyschema=mongoose.model("Applyschema",Applyschema)