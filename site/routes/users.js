const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController'); 
const validation = require("../validations/registerValidator")

router.get('/register', controller.register);
router.post('/register',validation,controller.registerProcess);
router.get('/login', controller.login);

module.exports = router;