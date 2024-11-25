// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const { loginUser, registerUser, getUserProfile, updateUserProfile } = require("../controllers/userController") // Correct path to modules
// const {jwtAuthMiddleware} = require("../middlewares/jwtMiddleware");
const {validateJwtToken}=require("../middlewares/jwtMiddleware");
// Register a new user
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/myaccount",validateJwtToken,  getUserProfile);
router.patch("/update", validateJwtToken,updateUserProfile);
module.exports = router;