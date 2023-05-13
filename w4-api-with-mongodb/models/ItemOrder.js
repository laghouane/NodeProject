const mongoose = require('mongoose');

// Create schema
const itemOrderSchema = mongoose.Schema({
    
    Item: {
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    },
    quantity : Number

})

// Create model
const ItemOrder = mongoose.model('ItemOrder', itemSchema)

module.exports = ItemOrder