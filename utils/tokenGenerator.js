const jsonwebtoken = require("jsonwebtoken")

const tokenGenerator = async (user) => {
    const token = jsonwebtoken.sign(
        {
            _id : user._id,
            name: user.name
        },
        process.env.JWT,
        {
            expiresIn: "2h"
        }
    );
    return token
}

module.exports = tokenGenerator