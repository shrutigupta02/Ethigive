const mongoose = require('mongoose');

exports.connectToDB = async() => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/demo");
        console.log('connection successful');
    }catch(err){
        console.log(err);
    } 
}