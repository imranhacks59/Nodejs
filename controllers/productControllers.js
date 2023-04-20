// const fs= require('fs');
// // const index=fs.readFileSync('data.json','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products
const Product = require('../models/productModels')

// create product
exports.createProduct=async(req,res)=>{
    const product  = await Product.create(req.body)
    // products.push(product);
    
    res.json(product)
}

exports.getAllProducts=async(req,res)=>{
    const product = await Product.find()
    res.json(product)
}

// get single products
exports.getSingleProducts=async(req,res)=>{
     const product  = await Product.findById(req.params.id);

     res.json(product)
}

// update products
exports.updateProduct=async(req,res)=>{
      let product = await Product.findById(req.params.id);
      product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
      })
      res.json(product)
}

// delete products
exports.deleteProduct =async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);

    res.json('product deleted successfully')
}
