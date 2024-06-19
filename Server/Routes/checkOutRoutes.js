const express = require('express');
const router = express.Router();
const Auth = require('../Middleware/useToken')
const checkOutController = require('../Controllers/checkOutController');

router.post('/place_order', Auth, checkOutController.placeOrder);
router.post('/get_orders'   , checkOutController.getOrders);



module.exports = router;
