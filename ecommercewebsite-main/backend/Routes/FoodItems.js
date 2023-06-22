const express = require('express')
const router = express.Router()
const food = require('../models/Food_items')
const { body, validationResult } = require('express-validator');

router.post("/fooditems",
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newFoods = await food.create(req.body);
            console.log(newFoods);
            res.status(201).json({ message: 'Food items added successfully', data: newFoods });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding food items to database' });
        }
    });

router.get("/getfoods", async (req, res) => {
    try {
        const allfoods = await food.find({})
        console.log(allfoods);

        return res.status(200).json({
            message: "successfully data fetched",
            data: allfoods
        })
    } catch (err) {
        console.log("There was an error in fetching from database")
        return res.status(301).json({
            error: err
        })
    }
})

module.exports = router;