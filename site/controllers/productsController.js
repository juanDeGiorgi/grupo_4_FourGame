const fs = require('fs');
const path= require('path');
const fsMethods = require("../utils/fsMethods");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const products= require('../data/products')

module.exports={

    detail : (req,res) => res.render('detailProduct',{
        product : products.find(product=>product.id === +req.params.id),
        toThousand,
        relatedProducts : products
    }),

    loading : (req,res) => res.render('productLoadingv2'),
  
    save : (req,res) => {
        let product = {
            id : products[products.length-1].id +1,
            name : req.body.name.trim().replace(":",""),
            description : req.body.description.trim().replace(":",""),
            image : "default-image.png",
            price : +req.body.price,
            discount : +req.body.discount,
            category : req.body.category,
            type : req.body.type,
            payMethod : +req.body.payMethod,
        }
        products.push(product)
        fsMethods.saveFile(products);
        fs.mkdirSync(fsMethods.join(`../public/images/${product.type}/${product.name}`))
        res.redirect('/');
    },

    edit : (req,res)=>{ res.render('productEditv2',{product : products.find(product=> product.id==req.params.id)})},

    update : (req,res)=> {
        let oldPath,newPath ;

        products.forEach(product => {
            if(product.id == req.params.id){
                    
                oldPath = `../public/images/${product.type}/${product.name}`;
                newPath = `../public/images/${req.body.type.trim().replace(":","")}/${req.body.name.trim().replace(":","")}`;
                product.name = req.body.name.trim().replace(":",""),
                product.description = req.body.description.trim().replace(":",""),
                product.price = +req.body.price,
                product.discount = +req.body.discount,
                product.category = req.body.category,
                product.type = req.body.type,
                product.payMethod = +req.body.payMethod
                
            }
        });
        
        fsMethods.saveFile(products);
        fsMethods.renameFolder(oldPath,newPath);
        res.redirect(`/products/detail/${req.params.id}`);
    },

    destroy : (req,res)=> {

        let deletePath

        for (let posicion = 0; posicion < products.length; posicion++) {
            if (products[posicion].id == req.params.id){
                deletePath = `../public/images/${products[posicion].type}/${products[posicion].name}`;
                products.splice(posicion, 1) 
            }
            
        }

        fsMethods.saveFile(products);
        fsMethods.deleteFolder(deletePath);
        res.redirect('/');

   }
}



