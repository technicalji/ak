const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
app.use(cors());
env.config();
const path = require("path");
mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection failed"));
db.once("open",function(){
console.log("Connection to the database successfully ");
});



app.use(express.json());
app.use("/public",express.static("public"));
const addUserRoute = require("./routes/users");
const addProjectRoute = require("./routes/project");
const sendEmailRoute = require("./routes/emailSender");

app.use(addUserRoute);
app.use(addProjectRoute);
app.use(sendEmailRoute);

app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`)
})