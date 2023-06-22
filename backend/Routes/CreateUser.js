const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwtSecret = "MynameisArchit"

router.post("/createuser", [
    body('email').isEmail(),
    body('name'),
    body('password', 'Incorrect password').isLength({ min: 5 })],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await user.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPassword
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
            // res.status(500).send("Error creating user");
        }
    });

router.post("/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;

        try {
            let userData = await user.findOne({ email })
            if (!userData) {
                return res.status(400).json({ error: "Try login using valid credentials" })
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ error: "Try login using valid credentials" })
            }

            const data = {
                user: {
                    id: userData.id
                }
            }

            const authToken = jwt.sign(data, jwtSecret)

            return res.json({ success: true, authToken: authToken })

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    });

module.exports = router;
