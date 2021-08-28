const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const controller = require('../controllers/usersController'); 

const validation = require("../validations/registerValidator");
const userValidator = require('../validations/userValidator');
const profileValidator = require("../validations/profileValidator");

/* Config multer storage */

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,path.join(__dirname,`../public/images/users`))
    },
    filename : (req,file,cb) =>{
        cb(null,`img-${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage : storage});

/* routes */

router.get('/register', controller.register);
router.post('/register',validation,controller.processRegister);

router.get('/login', controller.login);
router.post('/login', userValidator, controller.processLogin);

router.get('/profile/:id',controller.profile);
router.post('/profile/:id',upload.single("image"),profileValidator,controller.updateProfile);


router.get('/logout',controller.logout);

module.exports = router;