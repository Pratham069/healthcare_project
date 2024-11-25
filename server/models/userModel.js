const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /^\S+@\S+\.\S+$/.test(v); // Simple email validation regex
                },
                message: props => `${props.value} is not a valid email!`,
            },
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v); // Validates a 10-digit phone number
                },
                message: props => `${props.value} is not a valid phone number!`,
            },
        },
        age: {
            type: Number,
            required: true,
            min: [0, "Age must be a positive number"],
        },
        bloodGroup: {
            type: String,
            required: true,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], // Valid blood groups
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"], // Restrict gender to predefined values
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt timestamps
    }
);

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;
