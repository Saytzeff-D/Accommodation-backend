const UserModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

const register = (req, res)=>{
    let user = req.body
    let form = new UserModel(user)
    form.save().then(()=>{
        res.status(200).json('User Created')
    }).catch(()=>{
        res.status(500).json('Internal Server Error')
    })
}
const login = (req, res)=>{
    let data = req.body
    UserModel.findOne({email: data.email}).then((result)=>{
        if (!result) {
            res.status(200).json({error: true, message: 'Invalid Email'})
        } else {
            if (result.password == data.password) {
                const access_token = jwt.sign({result}, process.env.JWT_SECRET, {expiresIn: '60m'})
                res.status(200).json({error: false, access_token})
            } else {
                res.status(200).json({error: true, message: 'Invalid Password'})
            }
        }
    }).catch(()=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const userDetails = (req, res)=>{
    res.status(200).json(req.user)
}

module.exports = { register, login, userDetails }