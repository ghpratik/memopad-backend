const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Thisismysign';

//CREATE A USER USING POST : "/api/auth/createuser"  ===no login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'Password must contain atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    // check validation of bad requests and send errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check user exists with this email already
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        //password hash and add salt
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);
        //Create User In database
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured")
    }

})

module.exports = router