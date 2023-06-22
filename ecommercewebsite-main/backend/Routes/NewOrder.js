const express = require('express');
const router = express.Router();
const newOrder = require('../models/NewOrderM')
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');

router.post("/neworders", async (req, res) => {
    
})

module.exports = router