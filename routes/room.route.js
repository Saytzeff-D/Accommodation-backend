const express = require('express')
const { getRoom, uploadDetails, checkRoom, roomPrice } = require('../controllers/room.controller')
const { authJWT } = require('../middlewares/jwt.middleware')
const RoomRouter = express.Router()

RoomRouter.get('/getRoom', getRoom)
RoomRouter.post('/uploadDetails', uploadDetails)
RoomRouter.post('/checkRoom', checkRoom)
RoomRouter.post('/price', authJWT, roomPrice)

module.exports = RoomRouter