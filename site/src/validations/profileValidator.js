const {body} = require("express-validator");
const db = require("../database/models")
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

    // body('email')
    // .isEmail().withMessage('Debes ingresar un email válido')
    // .custom((value, {req})=> {
    //     return db.users.findOne({
    //         where : {
    //             email : value
    //         }
    //     }).then(user =>{
    //         // let emailRepeat = value != req.body.originalEmail ? user.email : null

    //         if(user && user.email != req.body.originalEmail){
    //             return Promise.reject()
    //         }
    //     }).catch(() => Promise.reject("Este email ya esta registrado"))
    // }),

]
