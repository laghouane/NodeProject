const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 6
    },
    fullname: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    role: {type: String, required: true},
    joinedAt: {
        type: Date,
        default: new Date().toISOString()
    },
    isActive:Boolean
})

const User = mongoose.model('User', userSchema)

module.exports = User;

