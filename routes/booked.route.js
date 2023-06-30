const express = require('express')
const { payNow, myVisits, transHistory, allBookings, verifyPay } = require('../controllers/booked.controller')
const { authJWT } = require('../middlewares/jwt.middleware')
const BookedRouter = express.Router()

BookedRouter.post('/pay', payNow)
BookedRouter.get('/myVisits', authJWT, myVisits)
BookedRouter.get('/transHistory', authJWT, transHistory)
BookedRouter.get('/allBookings', allBookings)
BookedRouter.post('/verifyPay', verifyPay)

module.exports = BookedRouter