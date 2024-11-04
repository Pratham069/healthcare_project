const { error } = require("console");
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // Use process.env.MONGO_URI to connect to the database
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.log("Databse connection failed",error);
        process.exit(1); // Exit if connection fails
    }
};

module.exports = connectDb;
