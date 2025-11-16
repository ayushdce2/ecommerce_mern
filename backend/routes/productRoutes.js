const express = require("express");
const router = express.Router();

const {getAllProducts,createProducts,updateProduct,deleteProduct,getSingleProducts} = require("../controller/productController.js");
const {rolebasedAccess} = require("../middleware/rolebasedAccess.js");

router.post("/createproduct",rolebasedAccess("admin"),createProducts);
router.put("/product/:id",rolebasedAccess("admin"),updateProduct);
router.delete("/product/:id",rolebasedAccess("admin"),deleteProduct);
router.get("/allproducts",getAllProducts);
router.get("/product/:id",getSingleProducts);

module.exports = router;