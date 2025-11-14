const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter your name"],
        maxLength:[25,"only 25 characters are allowed"],
        minLength:[3, "minimum 3 characters are required"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[3,"Password should be greater than 3 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true
        }
    },
    role : {
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire: Date

},{
    timestamps:true
});






const userModel = mongoose.model("user",userSchema);

module.exports = userModel;