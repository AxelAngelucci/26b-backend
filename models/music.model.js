const mongoose = require('mongoose');

const musicModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true 
    },
    description: {
        type: String,
    },
    date: {
        type: String
    },
    file: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("music", musicModel);