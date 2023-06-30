const express = require('express')
const { setBanner, getBanner } = require('../controllers/banner.controller')
const BannerRouter = express.Router()

BannerRouter.post('/setBanner', setBanner)
BannerRouter.get('/getBanner', getBanner)

module.exports = BannerRouter