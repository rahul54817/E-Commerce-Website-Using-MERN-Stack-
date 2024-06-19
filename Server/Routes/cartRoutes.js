const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

router.post('/get_all_carts', cartController.getCarts);
router.post('/add_to_cart', cartController.addCart);
router.post('/delete_cart', cartController.deleteCart);
router.put('/update_cart', cartController.updateCart);



module.exports = router;