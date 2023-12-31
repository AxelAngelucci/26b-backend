const express = require('express')
const { register, allUsers, login } = require('../controllers/users.controller')
const registerMiddleware = require('../middlewares/user.middleware')

const userRouter = express.Router()

userRouter.post('/user/register', registerMiddleware, register)
userRouter.get('/users', allUsers)
userRouter.post('/login', login)

module.exports = userRouter
