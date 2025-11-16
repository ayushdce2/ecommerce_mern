const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");


const userAuthentication = async (req,res,next)=>{
    

    try{

        const {token} = req.cookies;
    // console.log("running userAuthorization","cookieDATA=>",token);
    // console.log(req.cookies.token.includes("null"),"req.cookies");
    
    if(token.includes("null") || !token){
        return res.status(401).json({message:"login required"});
    }


        const isTokenVerified = jwt.verify(token,process.env.jwt_secret);
        // console.log(isTokenVerified,"isTokenVerified");

        req.user = await userModel.findById(isTokenVerified.id)
        
        // console.log(req.user,"verified user details");
        

    }catch(error){
        return res.status(500).json({message:"invalid token , access not granted",error})
    }
   


    next();
}

module.exports = {userAuthentication}