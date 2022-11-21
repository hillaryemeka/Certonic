const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const { userSignup, userLogin } = require('../controllers/authController');
const validateSignUp = require("../middleware/authValidators");

//user sign in
// router.post("/signin", )

//user sign up
router.post("/signup", validateSignUp, userSignup);
router.post("/login", userLogin);

module.exports = router;