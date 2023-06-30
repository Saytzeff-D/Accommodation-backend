const mongoose = require('mongoose')

const BannerSchema = mongoose.Schema({
    banner: String,
    caption: String,
    subCaption: String
})

const BannerModel = mongoose.model('banner_tbs', BannerSchema)
module.exports = BannerModel