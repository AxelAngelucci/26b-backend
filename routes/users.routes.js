const express = require('express')
const { register, allUsers, login } = require('../controllers/users.controller')

const userRouter = express.Router()

userRouter.post('/user/register', register)
userRouter.get('/users', allUsers)
userRouter.post('/login', login)

module.exports = userRouter
