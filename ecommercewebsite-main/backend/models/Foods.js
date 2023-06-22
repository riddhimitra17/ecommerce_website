const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    }
})
const Food = mongoose.model('Foodzz', foodSchema);

module.exports = Food;