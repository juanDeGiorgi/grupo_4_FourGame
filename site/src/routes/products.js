const express = require('express');
const router =  express.Router();
const multer = require("multer");
const path = require("path");

const validations = require("../validations/productCreate")
const accessCheck = require("../middlewares/accessCheck");

/* Config multer storage */

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,path.join(__dirname,`../public/images/products`))
    },
    filename : (req,file,cb) =>{
        cb(null,`img-${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage : storage});

/* Require controller */

const controller = require("../controllers/productsController");

/* Product detail */

router.get('/detail/:id', controller.detail);

/* Product create*/ 

router.get('/create',accessCheck,controller.loading);
router.post('/create/:id',upload.any(),validations,controller.save);

/* Product edit */

router.get('/edit/:id',accessCheck,controller.edit);
router.put('/edit/:id',upload.any(),validations,controller.update);

/* Product delete */

router.delete('/delete/:id',accessCheck,controller.destroy);


module.exports = router;

