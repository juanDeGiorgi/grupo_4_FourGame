const {body} = require('express-validator');
const users = require('../data/users_db')

module.exports = [

    body('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El nombre tiene que tener como mínimo 2 caracteres').bail()
    .isAlpha().withMessage('El nombre debe contener solo letras'),


    body('email')
    .isEmail().withMessage('Debes ingresar un email válido')
    .custom((value, {req})=> {
        let emailRepeat = users.find(user => user.email == value)
        if(!emailRepeat){
            return true
        }else{
            return false 
        }
    }).withMessage('Este email ya esta registrado'),


    body('password')
    .isLength({
        min : 6,
        max : 12
    }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),


    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden'),

    
   //  body('acepta')
    //.isString('on').withMessage('Debes aceptar los términos y condiciones')
]