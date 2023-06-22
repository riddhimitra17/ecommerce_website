const mongoose = require('mongoose');

const food_items = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [
        {
            half: {
                type: String
            },
            full: {
                type: String
            }
        }
    ],
    description: {
        type: String,
        required: true
    }
})
const Food_items = mongoose.model('Food_items', food_items);

module.exports = Food_items;