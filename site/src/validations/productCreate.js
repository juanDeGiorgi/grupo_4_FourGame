const path = require("path");
const {body} = require("express-validator");

module.exports = [
    body("name")
        .notEmpty().withMessage("debes introducir un nombre")
        .isLength({min : 5}).withMessage("el nombre debe tener al menos 5 caracteres"),

    body("price")
        .notEmpty().withMessage("debes introducir un precio")
        .isInt().withMessage("debes introducir un numero"),

    body("discount").custom((value,{req})=>{
        if(value){
            if(!Number.isInteger(parseInt(value))){

                throw new Error("el descuento tiene que ser numerico");
            }else if(parseInt(value) > 100){

                throw new Error(`el descuento no puede ser mayor al 100%`);
            }else if(value.length > 3){

                throw new Error(`el descuento no puede contener mas de 3 digitos`);
            }
        }
        return true 
    }),

    body("type")
       .notEmpty().withMessage("debes elegir un tipo de producto"),

    body("category")
    .notEmpty().withMessage("debes elegir una categoria"),  

    body("description")
      .notEmpty().withMessage("el producto debe tener una descripcion")
      .isLength({min : 20}).withMessage("la descripcion debe tener un minimo de 20 caracteres")
      .isLength({max : 500}).withMessage("la descripcion puede tener un maximo de 500 caracteres"),

    body("image").custom((value,{req})=>{
        let extensions = [".jpg",".jpeg",".gif",".png",".webp"]

        if(req.files.length == 0){
            return true
        }else{
            for (let i=0;i< req.files.length; i++) {
                if(!extensions.includes(path.extname(req.files[i].originalname))){
                    throw new Error(`las extensiones permitidas son ${extensions.join(", ")}`);
                }
            }
            return true
        }
    }),
    
]