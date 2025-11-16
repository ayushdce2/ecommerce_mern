const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");


const userAuthorization = async (req,res,next)=>{
    const {token} = req.cookies;
    console.log("running userAuthorization","cookieDATA=>",token);
    if(!token){
        return res.status(401).json({message:"login required"});
    }

    try{
        const isTokenVerified = jwt.verify(token,process.env.jwt_secret);
        console.log(isTokenVerified,"isTokenVerified");

        req.user = await userModel.findById(isTokenVerified.id)
        
        console.log(req.user,"verified user details");
        

    }catch(error){
        return res.status(500).json({message:"invalid token, un-authorised access found",error})
    }
   


    next();
}

module.exports = {userAuthorization}