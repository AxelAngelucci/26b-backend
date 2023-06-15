const mongoose = require('mongoose');
require('dotenv').config()

const db = () => {
    try {
        mongoose.connect("mongodb+srv://admin:devschool@cluster0.3mjhe6d.mongodb.net/?retryWrites=true&w=majority")
        console.log('Conectados a moingodb atlas')
    }catch(error){
        console.log('Algo salió mal')
        console.log(error)
    }
}

module.exports = db;