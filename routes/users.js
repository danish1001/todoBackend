const express = require('express');
const router = express.Router();
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require('config');

// user Schema and model
const User = require("../model/userModel");
const res = require('express/lib/response');


// @route           POST api/users
// @description     Register a user
// @access          Public

router.post(
    "/", 
    [
        check("name", "Please add name").not().isEmpty(),
        check("email", "Please add email").isEmail(),
        check("password", "Please add password of atleast 6 characters").isLength({min: 6})
    ] ,
    async function(req, res) {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors_are: errors.array()})
        }

    const {name, email, password} = req.body;

    try {
        
        let user = await User.findOne({email: email});

        if(user) {
            res.status(400).json({error: "user already exists"});
        }

        user = new User({
            name: name,
            email: email,
            password: password
        });

        await user.save();

        const payload = {
            user: {
                id: user.id
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
                res.json({token});
            }
        )

    } catch (error) {
        console.log(error.message);
        res.json(500).json({error: "server error"})
    }


});

module.exports = router;