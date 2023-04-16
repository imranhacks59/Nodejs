const fs= require('fs');
// const index=fs.readFileSync('data.json','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products

// create product
exports.createProduct=(req,res)=>{
    const product = req.body
    products.push(product);
    res.json(product)
}

exports.getAllProducts=(req,res)=>{
    res.json(products)
}

// get single products
exports.getSingleProducts=(req,res)=>{
    const id = req.params.id
    console.log(id)
    const product = products.find(p=>p.id==id)
    res.json(product)
}

// update products
exports.updateProduct=(req,res)=>{
    const id= req.params.id;
    const updatedData = {...req.body}
    const productIndex = products.findIndex(p=>p.id==id)
    products.splice(productIndex,1,updatedData)
    res.json(updatedData)
}

// delete products
exports.deleteProduct =(req,res)=>{
    const id = req.params.id
    const productIndex=products.findIndex(p=>p.id==id)
    products.splice(productIndex,1)
    res.json('product has been deleted')
}
