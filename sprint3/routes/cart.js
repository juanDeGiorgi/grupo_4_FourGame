const express = require('express');
const router = express.Router();

const controller = require("../controllers/cartController")

/* GET home page. */
router.get('/show',controller.cart)

module.exports = router;