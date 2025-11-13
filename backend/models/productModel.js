const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product desctiption"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[7,"Price can not exceed 7 digits"]
    },
    ratings:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                type:String,
                require:true

            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please enter product category"]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[5,"Stock can not exceed 5 digits"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;