const express = require('express')
const { getRoom, uploadDetails, checkRoom, roomPrice, deleteRoom } = require('../controllers/room.controller')
const { authJWT } = require('../middlewares/jwt.middleware')
const RoomRouter = express.Router()

RoomRouter.get('/getRoom', getRoom)
RoomRouter.post('/uploadDetails', uploadDetails)
RoomRouter.post('/checkRoom', checkRoom)
RoomRouter.post('/price', authJWT, roomPrice)
RoomRouter.patch('/deleteRoom', deleteRoom)

module.exports = RoomRouter