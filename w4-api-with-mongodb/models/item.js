const mongoose = require('mongoose');

// Create schema
const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6
    },
    createAt: {
        type: Date,
        default: new Date().toISOString()
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    price:Number,
    description:String,
    quantity : Number
    

})

// Create model
const Item = mongoose.model('Item', itemSchema)

module.exports = Item