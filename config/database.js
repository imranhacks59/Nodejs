const mongoose = require('mongoose');

const ConnectDatabase=()=>{
    mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((data)=>{
        console.log(`server connected with mongodb ${data.connection.host}`)
    })
}

module.exports= ConnectDatabase