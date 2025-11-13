const app = require("./app.js");
// console.log(app)

const dotenv = require("dotenv");
dotenv.config({path:"./backend/config/config.env"});

const connectMongoDatabase = require("./config/db.js");
connectMongoDatabase();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is runnning on ${PORT} `)
})