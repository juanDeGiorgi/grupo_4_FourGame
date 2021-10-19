const express = require('express');
const router = express.Router();

const controller = require("../controllers/indexController")

/* GET home page. */

router.get('/',controller.index)
router.get('/about',controller.about);
router.get('/search',controller.search);

module.exports = router;


