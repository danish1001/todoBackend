const express = require('express');
const router = express.Router();
const User = require("../model/userModel");
const auth = require("../middleware/auth");
const {check, validationResult} = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");


// @route           GET /api/auth/getUserByToken
// @description     GET user object by id if authenticated
// @access          private

router.get("/getUserByToken", auth, async function(req, res) {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

// @route           POST /api/auth/login
// @description     GET Token by username and password by login
// @access          public

router.post("/login", [
    check("email", "please include a valid email address").isEmail(),
    check("password", "please include a valid password").exists()
] ,async(req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        // console.log("please enter email and pasword")
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email: email});
        if(!user) {
            // console.log("user not found ----------------------------------")
            // res.status(400).json({error: "user not exists, Please sign up"});
            res.status(400).json({error: "user not found"});
        }

        if(user.password != password) {
            // console.log("password mismatch -----------------------------------")
            res.status(400).json({error: "Invalid Credentials"});
        }

        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 3600
            },
            (err, token) => {
                if(err) {
                    throw err;
                }
                // console.log("token is below")
                // console.log(token);
                res.json({"token": token });
            }
        )

    } catch (error) {
        console.error(err.message);
        console.error("server error --------------------------------");
            res.status(500).send("server error");
    }


});


module.exports = router;