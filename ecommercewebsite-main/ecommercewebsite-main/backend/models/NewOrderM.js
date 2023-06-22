const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewOrder = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    order_data: {
        type: Array,
        required: true
    }
})

const NewOrders = mongoose.model('NewOrder', NewOrder);
module.exports = NewOrders;