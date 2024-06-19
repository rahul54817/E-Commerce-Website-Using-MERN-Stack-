
const express = require('express');
const Auth = require('../Middleware/useToken')

const productController = require('../Controllers/produtController')

const router = express.Router();

router.post('/add_product', productController.addProduct)
router.get('/get_products', productController.getProduct)
router.post('/get_product_by_id', productController.getProductById)


module.exports = router;


