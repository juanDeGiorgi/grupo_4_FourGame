const {body} = require('express-validator');
const db = require("../database/models");

module.exports = [

    body('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min : 2,
        max : 50
    }).withMessage('El nombre tiene que tener como mínimo 2 caracteres').bail(),

    body('email')
    .isEmail().withMessage('Debes ingresar un email válido')
    .custom((value, {req})=> {
        return db.users.findOne({
            where : {
                email : value
            }
        }).then(user =>{
            if(user){
                return Promise.reject()
            }
        }).catch(() => Promise.reject("Este email ya esta registrado"))
    }),

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
    
]