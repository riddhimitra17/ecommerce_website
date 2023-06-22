const express = require('express');
const router = express.Router();
const hotel = require('../models/HotelSch');
const { body, validationResult } = require('express-validator');

router.post("/addhotel", [
    body('name'),
    body('location'),
    body('image'),
    body('menulink')
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const Hotel = await hotel.create({
                name: req.body.name,
                location: req.body.location,
                image: req.body.image,
                menulink: req.body.menulink
            });
            console.log(Hotel)
            res.json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
            // res.status(500).send("Error creating hotel");
        }
    });


router.get("/fetchHotels", async (req, res) => {

    try {
        const allHotels = await hotel.find({});
        //console.log(allHotels)

        return res.status(200).json({
            message: "Successfully fetched hotels",
            data: allHotels
        })

    } catch (err) {
        console.log("There was an error in fetching from database")
        return res.status(301).json({
            error: err
        })
    }

})


module.exports = router;
