const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController'); 

const validation = require("../validations/registerValidator");
const userValidator = require('../validations/userValidator')


router.get('/register', controller.register);
router.post('/register',validation,controller.processRegister);

router.get('/login', controller.login);
router.post('/login', userValidator, controller.processLogin);

router.get('/profile',controller.profile);


module.exports = router;