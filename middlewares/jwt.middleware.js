const verifyToken = require("../utils/verifyToken")

const authMiddleware = async (request, response, next) => {
    console.log(request)
    const userToken = request.headers.authorization

    
    try {
        console.log(request)
        if(!userToken) return response.status(300).json({message: "dame un token papu"})
        const verifiedToken = await verifyToken(userToken.split(" ").pop())
        if(!verifiedToken) return response.status(300).json({message: "a tu casa"})
        next()
    } catch (error) {
        response.status(500).json({message: "Internal server error"})
    }
}

module.exports = authMiddleware;