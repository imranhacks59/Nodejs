
const express=require('express');
const { createProduct, getAllProducts, getSingleProducts, updateProduct, deleteProduct } = require('../controllers/productControllers');
const router=express.Router();

router.route('/products').post(createProduct)
router.route('/products').get(getAllProducts)
router.route('/products/:id').get(getSingleProducts)
router.route('/products/:id').put(updateProduct);
router.route('/products/:id').delete(deleteProduct);

module.exports = router