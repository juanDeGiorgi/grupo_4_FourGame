const express = require('express');
const router =  express.Router();

const controller = require("../controllers/productsController");

/* Product detail */

router.get('/products/:id', controller.detail);

/* Product create*/ 

router.get('/products/create', controller.loading);
router.post('/products/create', controller.loading);

/* Product edit */

router.get('/products/edit/:id', controller.edit);
router.put('/products/edit/:id', controller.edit);



module.exports = router;

