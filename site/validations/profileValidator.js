const {body} = require("express-validator");
const users = require("../data/users_db");
const path = require("path");

module.exports = [

    body("image").custom((value,{req})=>{
        let extensions = [".jpg",".jpeg",".gif",".png",]

        if(!req.file){
            return true
        }else{
            if(!extensions.includes(path.extname(req.file.originalname))){
                throw new Error(`las extenciones permitidas son ${extensions.join(", ")}`);
            }else{
                return true 
            }
        }
    }),

    body("name")
    .notEmpty().withMessage("debes introducir un nombre")
    .isLength({min : 3}).withMessage("el nombre debe tener al menos 3 caracteres"),

    body('email')
    .isEmail().withMessage('Debes ingresar un email válido')
    .custom((value, {req})=> {
        let emailRepeat = users.find(user => user.email == value && value != req.body.originalEmail)
        if(!emailRepeat){
            return true
        }else{
            return false 
        }
    }).withMessage('Este email ya esta registrado'),

    body("access")
    .notEmpty().withMessage("debes elegir un tipo de producto"),
]