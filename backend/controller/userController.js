const userModel = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req,res)=>{

    const {name,email,password} = req.body;

    // password hashing

    const hex_password = await bcryptjs.hash(password,10);

    const token = jwt.sign({email:email},process.env.jwt_secret,{expiresIn:process.env.jwt_expire})


    const newUserRegister = await userModel.create({name,email,password:hex_password,avatar:{public_id:"temp id",url:"temp url"}});
    
    console.log(newUserRegister);

    res.status(201).json({success:true,message:"User registered Successfully",newUserRegister,token})

}

const loginUser = async ()=>{

    const {email,password} = req.body;
    

}

module.exports = {registerUser}