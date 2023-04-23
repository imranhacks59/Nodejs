const User = require('../models/userModel');
const jwt  = require('jsonwebtoken')

exports.userRegister = async(req,res)=>{
    const {name,email,password} =  req.body

    const user =await User.create({
        name,email,password
    })
    let token = jwt.sign({email},process.env.JWT_SECRET)
    user.token = token

    res.send({user})
}