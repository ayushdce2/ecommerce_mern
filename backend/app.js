const express = require("express");
const app = express();
const ProductRoutes = require("./routes/productRoutes.js");

//middleware
app.use(express.json()) //necessary for POST method

app.use("/api/v1/",ProductRoutes);

module.exports = app;