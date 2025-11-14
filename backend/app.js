const express = require("express");
const app = express();
const ProductRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

//middleware
app.use(express.json()) //necessary for POST method

app.use("/api/v1/",ProductRoutes);
app.use("/api/v1/",userRoutes);

module.exports = app;