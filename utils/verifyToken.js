const jsonwebtoken = require("jsonwebtoken")
require('dotenv').config()

const verifyToken = async (token) => {
    try {
        return jsonwebtoken.verify(token, process.env.JWT)
    } catch (error) {
        console.log(error)
    }
 }

module.exports = verifyToken