const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs");
const tokenGenerator = require("../utils/tokenGenerator");

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(5);
    return bcrypt.hashSync(password, salt);
}
const matchPassword = (userPassword, hash) => {
    const match = bcrypt.compareSync(userPassword, hash)
    return match;
}

const register = async (request, response) => {
    const password = hashPassword(request.body.password)
    console.log(request.body)
    try {
        const newBody = {...request.body, password}
        const user = await userModel.create(newBody)
        return response.status(200).json({message: 'Usuario creado!', usuario: user})
    } catch (error) {
        console.log(error)
        return response.status(500).json({error: error})
    }
}

const allUsers = async (request, response) => {
    try {
        const users = await userModel.find()
        return response.status(200).json({usuarios: users})
    } catch (error) {
        console.log(error.message)
        return response.status(500).json({error: error})
    }
}

const login = async (request, response) => {
    try {
        const user = await userModel.findOne({mail: request.body.mail})
        if(!user) return response.status(404).json({error: 'Usuario no encontrado'})
        const match = matchPassword(request.body.password, user.password)
        if(!match) return response.status(200).json({message: "Ususario o contraseña incorrectos"})
        const token = await tokenGenerator(user);
        return response.status(200).json({message: "Bien!!!!", token: token})
    } catch (error) {
        return response.status(500).json({error: error})
    }
}

module.exports = {register, allUsers, login}