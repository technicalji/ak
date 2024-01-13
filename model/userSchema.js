const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    phone:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
    },
    address:{
        type:String,
        trim:true,
    }, 
});
module.exports = mongoose.model("users",userSchema);