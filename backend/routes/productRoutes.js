const express = require("express");
const router = express.Router();

const {getAllProducts,createProducts,updateProduct,deleteProduct,getSingleProducts} = require("../controller/productController.js");

router.get("/allproducts",getAllProducts);
router.post("/createproduct",createProducts);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);
router.get("/product/:id",getSingleProducts);

module.exports = router;