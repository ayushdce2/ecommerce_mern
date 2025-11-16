const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ProductRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const {userAuthentication} = require("./middleware/userAuthentication.js");


//middleware
app.use(express.json()) //necessary for POST method
app.use(cookieParser())

app.use("/api/v1/products", userAuthentication, ProductRoutes);
app.use("/api/v1/user",userRoutes);

module.exports = app;