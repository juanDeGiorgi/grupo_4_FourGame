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

    loading : (req,res) => res.render('productLoading'),
  
    save : (req,res) => {
        let product = {
            id : products[products.length-1].id +1,
            name : req.body.name.trim().replace(":",""),
            description : req.body.description.trim().replace(":",""),
            image : req.file ? req.file.filename : `default-image.png`,
            price : +req.body.price,
            discount : +req.body.discount,
            category : req.body.category,
            type : req.body.type,
            payMethod : +req.body.payMethod,
        }
        products.push(product)
        fsMethods.saveFile(products);
        fsMethods.createFolder(`../public/images/${product.type}/${product.name}`);
        if(req.file){
            fsMethods.moveFile(`../public/images/${req.file.filename}`,`../public/images/${product.type}/${product.name}/${req.file.filename}`);
        }else{
            fsMethods.copyFile(`../public/images/default-image.png`,`../public/images/${product.type}/${product.name}/default-image.png`);
        }
        res.redirect('/');
    },

    edit : (req,res)=>{ res.render('productEdit',{product : products.find(product=> product.id==req.params.id)})},

    update : (req,res)=> {
        let oldPath,newPath,oldImagePath;

        products.forEach(product => {
            if(product.id == req.params.id){
                    
                oldImagePath = `../public/images/${product.type}/${product.name}/${product.image}`;
                if(req.file) fsMethods.renameFolder(`../public/images/${req.file.filename}`,`../public/images/${product.type}/${product.name}/${req.file.filename}`)
                oldPath = `../public/images/${product.type}/${product.name}`;
                newPath = `../public/images/${req.body.type.trim().replace(":","")}/${req.body.name.trim().replace(":","")}`;
                
                product.name = req.body.name.trim().replace(":","");
                product.description = req.body.description.trim().replace(":","");
                product.price = +req.body.price;
                product.discount = +req.body.discount;
                product.category = req.body.category;
                product.type = req.body.type;
                product.payMethod = +req.body.payMethod;
                product.image = req.file ? req.file.filename : product.image;
                
            }
        });
        
        fsMethods.saveFile(products);
        fsMethods.renameFolder(oldPath,newPath);
        if(req.file) fsMethods.deleteFile(oldImagePath);
        res.redirect(`/products/detail/${req.params.id}`);
    },

    destroy : (req,res) => {

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



