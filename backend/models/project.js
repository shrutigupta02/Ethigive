const mongoose=require("mongoose")
const {Schema}=mongoose

const projectSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    amountRaised:{
        type:Number,
    }
});

module.exports=mongoose.model('Project',projectSchema)