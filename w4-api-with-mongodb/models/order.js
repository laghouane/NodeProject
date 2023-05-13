const mongoose = require('mongoose');

// Create schema
const orderSchema = mongoose.Schema({
    status: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: new Date().toISOString()
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },items: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }],
    total:Number
    
    

})

// Create model
const Order = mongoose.model('Order', orderSchema)

module.exports = Order