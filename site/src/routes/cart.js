const express = require('express');
const router = express.Router();

const userCheck = require("../middlewares/usersCheck");

const controller = require("../controllers/cartController");

router.get('/:id',userCheck,controller.cart)

module.exports = router;