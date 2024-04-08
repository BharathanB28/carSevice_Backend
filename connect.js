const mongoose = require("mongoose");

exports.connect = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Successfully connected to MongoDB")
    }catch(error){
        console.log(error)
    }
}