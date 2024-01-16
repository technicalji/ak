const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const saveUser = async (req, res) => {
    const {name, email, password, address, phone} = req.body;
    const userExist = await User.findOne({email:email});
    if(userExist){
        return(
            res.status(200).json({
                message : "User already exist"
            })
        )
    }else{
        const hashingPassword = await bcrypt.hash(password,12);
        const user = new User({
            name:name,
            email:email,
            password:hashingPassword,
            address:address,
            phone:phone
        });
        const result = await user.save();
        return(
            res.status(201).json({
                message:"user Save",
                result
            })
        )
    }
};
const getUsers = async (req, res) => {
    try {
        const data = await User.find();
        return(
            res.status(200).json({
                data
            })
        )
    } catch (error) {
        return(
            res.status(200).json({
                message:"something went wrong"
            })
        )
    }
}
module.exports = {saveUser, getUsers};
