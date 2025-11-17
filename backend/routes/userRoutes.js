const express = require("express");
const router = express.Router();

const {registerUser, loginUser, logoutUser, resetPassword} = require("../controller/userController.js");


router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.post("/forgotpassword",resetPassword);
router.post("/resetpassword",resetPassword);


module.exports = router;