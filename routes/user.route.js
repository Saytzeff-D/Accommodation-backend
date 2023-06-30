const express = require('express')
const { register, login, userDetails } = require('../controllers/user.controller')
const { authJWT } = require('../middlewares/jwt.middleware')
const UserRouter = express.Router()

UserRouter.post('/register', register)
UserRouter.post('/login', login)
UserRouter.get('/me', authJWT, userDetails)

module.exports = UserRouter