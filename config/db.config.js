const mongoose = require('mongoose');
require('dotenv').config()

const db = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('Conectados a moingodb atlas')
    }catch(error){
        console.log('Algo salió mal')
        console.log(error)
    }
}

module.exports = db;