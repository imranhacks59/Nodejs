const express= require('express');
const product = require('./routes/productRoutes')
const app  = express();

app.use(express.json())
app.use(express.urlencoded())
app.use('/api/v1',product)



app.listen(8080,()=>{
    console.log('server is running on port 8080')
})