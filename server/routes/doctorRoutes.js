const express = require("express");
const router = express.Router();
const doctorDetailControllers = require("../controllers/doctorController");
const {validateJwtToken} = require("../middlewares/jwtMiddleware");

router.post("/register", doctorDetailControllers.registerDoctor);


router.get("/alldoctors", validateJwtToken, doctorDetailControllers.getAllDoctors);

module.exports = router;
// route