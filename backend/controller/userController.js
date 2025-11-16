const userModel = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");


const registerUser = async (req,res)=>{
try{
    const {name,email,password} = req.body;

    // password hashing

    const hex_password = await bcryptjs.hash(password,10);

    const newUserRegister = await userModel.create({name,email,password:hex_password,avatar:{public_id:"temp id",url:"temp url"}});
    console.log(newUserRegister,"newUserRegister")
    // const token = jwt.sign({email:email},process.env.jwt_secret,{expiresIn:process.env.jwt_expire})

    const token = newUserRegister.getJWTToken();
    const cookie_data = newUserRegister.cookieData();

    res.status(201)
    .cookie("token",token, cookie_data)
    .json({success:true,token,newUserRegister,message:"User registered Successfully"});

    console.log(newUserRegister);
    }catch(error){
        // console.log(error)
        
        error.code == "11000" && res.status(500).json({message:"User Already esists",error:error.errmsg})
    }

}

const loginUser = async (req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"email or password can not be empty"})
    }

    const userLoggedIn = await userModel.findOne({email}).select("+password");

    if(!userLoggedIn){
        return res.status(401).json({message:"User not found"});
    }

    const isPasswordMatched = await bcryptjs.compare(password, userLoggedIn.password);
    if(!isPasswordMatched){
        return res.status(401).json({message:"Incorrect password"});
    }

    const token = userLoggedIn.getJWTToken();
    const cookie_data = userLoggedIn.cookieData();

    res.status(200)
    .cookie("token",token, cookie_data)
    .json({success:true,token,userLoggedIn});
    
    

}

const logoutUser = (req,res)=>{
    res.cookie("token",null,{
        expire: new Date(Date.now()),
        httpOnly:true
    });
    return res.status(200).json({success:true,message:"LoggedOut successfully"})
}

module.exports = {registerUser, loginUser, logoutUser}