const express = require('express')
const router = express.Router()
const foodcat = require('../models/Foods')
const { body, validationResult } = require('express-validator');

router.post("/sendfood",
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newFoods = await foodcat.create(req.body);
            console.log(newFoods);
            res.status(201).json({ message: 'Food items added successfully', data: newFoods });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding food items to database' });
        }
    }
);

router.get("/getfoodcat",
    async (req, res) => {
        try {
            const allFoodCat = await foodcat.find({})
            console.log(allFoodCat)
            return res.status(200).json({
                message: "successfully data fetched",
                data: allFoodCat
            })
        } catch (error) {
            console.log("There is error in fetching data");
        }
    })

module.exports = router;