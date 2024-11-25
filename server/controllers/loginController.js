const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const loginUser = asyncHandler(async (req, res) => {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
        return res.status(400).json({ message: "Please provide an email" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Send a success response without a token
    res.status(200).json({ message: "Login successful", user });
});

const getUserProfile = asyncHandler(async(req, res) => {
    try{
        const {email} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(401).json({message:"user not found"});

        return res.status(200).json({data})
    }
    catch(err) {
        return res.status(500).json({message: "Server error", error: err.message});
    }    
})

module.exports = { loginUser };