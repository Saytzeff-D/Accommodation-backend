const BannerModel = require("../models/banner.model");
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const setBanner = (req, res)=>{
    let myBanner = req.body
    cloudinary.v2.uploader.upload(myBanner.banner, (err, result)=>{
        if (!err) {
            myBanner.banner = result.secure_url
            let form = new BannerModel(myBanner)
            form.save().then(()=>{
                res.status(200).json('Success')
            }).catch(()=>{
                res.status(300).json('Something went wrong')
            })
        } else {
            res.status(500).json('Internal Server Error')
        }
    })
}
const getBanner = (req, res)=>{
    BannerModel.find().then(result=>{
        res.json(result)
    }, err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const deleteBanner = (req, res)=>{
    BannerModel.findByIdAndDelete(req.body.id).then(()=>{
        res.status(200).json('Success')
    }).catch(()=>{
        res.status(500).json('Internal Server Error')
    })
}

module.exports = { setBanner, getBanner, deleteBanner }