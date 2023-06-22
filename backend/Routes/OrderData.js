const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');
const { Router } = require('react-router-dom');

router.post('/orderdata', async (req, res) => {

    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })

    //if email not existing in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })
    console.log(eId)

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [{...data, address: req.body.address}]
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    } else {
        try {
            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: {...data, address: req.body.address} } })
            res.json({ success: true })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

// router.post('/myOrderData', async (req, res) => {
//     try {
//         console.log(req.body.email)
//         let eId = await Order.findOne({ 'email': req.body.email })
//         //console.log(eId)
//         res.json({ orderData: eId })
//     } catch (error) {
//         res.send("Error", error.message)
//     }
// });

router.get('/allorders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json(orders);
        console.log(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving orders data");
    }
});

module.exports = router;

