const mongoose = require("mongoose");

const connectMongoDatabase=()=>{

mongoose.connect(process.env.DB_Uri)
.then((data)=>{
    console.log(`db connected to ${data.connection.host}`);
})
.catch((error)=>{
    console.log(error.message);
})

}

module.exports = connectMongoDatabase;
