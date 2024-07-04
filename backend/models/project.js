const mongoose=require("mongoose")
const {Schema}=mongoose

const projectSchema= new Schema({
    charityname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    amountRaised:{
        type:Number,
        default: 0
    }
});

module.exports = mongoose.model('Project', projectSchema);