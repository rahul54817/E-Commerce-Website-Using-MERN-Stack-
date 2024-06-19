const express = require('express');
const userController = require('../Controllers/userCotroller.js');
const Auoth = require('../Middleware/useToken.js')

const router = express.Router();

router.post('/signup', userController.createUser);
router.get('/users', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router