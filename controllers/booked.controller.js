const BookedModel = require("../models/booked.model");
const UserModel = require("../models/user.model");

const payNow = (req, res)=>{
    let data = req.body
    data.created_at = new Date()
    let form = new BookedModel(data)
    form.save().then(()=>{
        res.status(200).json('Inserted')
    }).catch(()=>{
        res.status(300).json('Internal Server Error')
    })
}
const myVisits = (req, res)=>{
    let userId = req.body.user_id
    BookedModel.find({user_id: userId}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err)
        res.status(300).json('Internal Server Error')
    })
}
const transHistory = (req, res)=>{
    let userId = req.body.user_id
    BookedModel.find({user_id: userId}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err)
        res.status(300).json('Internal Server Error')
    })
}
const allBookings = (req, res)=>{
    BookedModel.find().then((result)=>{
        UserModel.find().then((user)=>{
            res.status(200).json([result, user])
        })
    }).catch(()=>{
        res.status(300).json('Server Error')
    })
}
const verifyPay = (req, res)=>{
    BookedModel.findOne({payment_ref: req.body.paymentRef}).then((booked)=>{
        UserModel.findById(booked.user_id).then((user)=>{
            console.log([booked, user])
            res.json([booked, user])
        })
    }).catch(()=>{
        res.status(300).json('Internal Server Error')
    })
}

module.exports = { payNow, myVisits, transHistory, allBookings, verifyPay }