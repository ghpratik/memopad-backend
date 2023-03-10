const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

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
        //Create User In database
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        res.json({ user })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured")
    }

})

module.exports = router