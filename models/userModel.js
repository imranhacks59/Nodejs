const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:[true, "please enter your email"],
    //    validate:{
    //     validator:function(){
    //         return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
    //     },
    //     message:(props)=> `${props.value} is not valid email`
    //    }   
    },
    password:{
        type:String,
        required:[true, "please enter password"]
    },
    token:{
        type:String
    }
})

// get jwt token
// userSchema.methods.getJwtToken = function(){
//     jwt.sign({id:this._id},process.env.JWT_SECRET)
// }
module.exports  = mongoose.model('User',userSchema);