const express = require('express')
const { setBanner, getBanner, deleteBanner } = require('../controllers/banner.controller')
const BannerRouter = express.Router()

BannerRouter.post('/setBanner', setBanner)
BannerRouter.get('/getBanner', getBanner)
BannerRouter.patch('/deleteBanner', deleteBanner)

module.exports = BannerRouter