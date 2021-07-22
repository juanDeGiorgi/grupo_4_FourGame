const express = require('express');
const router = express.Router();

const controller = require('../controllers/cartController');

router.get('/cart',controller.cart);

module.exports = router;