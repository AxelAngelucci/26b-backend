const { validationResult } = require("express-validator")

const useValidationResult = async (request, response, next) => {
    try {
        validationResult(request).throw()
        next()
    } catch (error) {
        response.status(400).json({errors: error.array()})
    }
}

module.exports = useValidationResult