const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('users', userModel);