const express = require('express');
const router =  express.Router();

const controller = require("../controllers/productsController");

/* Product detail */

router.get('/detail/:id', controller.detail);

/* Product create*/ 

router.get('/create', controller.loading);
router.post('/create', controller.save);

/* Product edit */

router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.edit);

/* Product delete */

router.delete('/delete/:id', controller.destroy);




module.exports = router;

