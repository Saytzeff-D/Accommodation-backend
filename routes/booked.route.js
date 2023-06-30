const express = require('express')
const { payNow, myVisits, transHistory, allBookings } = require('../controllers/booked.controller')
const BookedRouter = express.Router()

BookedRouter.post('/pay', payNow)
BookedRouter.post('/myVisits', myVisits)
BookedRouter.post('/transHistory', transHistory)
BookedRouter.get('/allBookings', allBookings)

module.exports = BookedRouter