const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    name:{
        type:String
    },
    sub_description:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
},{timeStamp:true});
module.exports = mongoose.model("Projects",projectSchema);