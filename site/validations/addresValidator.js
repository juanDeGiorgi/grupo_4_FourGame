const {body} = require('express-validator');
module.exports = [

    body('street') 
      
    .notEmpty().withMessage('Debes ingresar una calle')
    .isLength({max: 255}).withMessage('No puedes superar los 255 caracteres'),

    body('number')
       
        .notEmpty().withMessage('Debes ingresar una numeración')
        .isInt().withMessage('Ingresar sólo números'),

    body('postalCode')

    .notEmpty().withMessage('Debes ingresar un código postal')
    .isInt().withMessage('Ingresar sólo números'),

    body('neighborhood')

    .notEmpty().withMessage('Debes ingresar una localidad')
    .isLength({max: 255}).withMessage('No puedes superar los 255 caracteres'),

    body('notes')

    .isLength({max: 255}).withMessage('No puedes superar los 255 caracteres'),
    
]