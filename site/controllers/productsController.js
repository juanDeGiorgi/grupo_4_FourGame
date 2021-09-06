const fs = require('fs');
const path= require('path');
const fsMethods = require("../utils/fsMethods");
const {validationResult} = require('express-validator')

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

        const errors = validationResult(req);

        if(errors.isEmpty()){
            let product = {
                id : products[products.length-1].id +1,
                name : req.body.name.trim().replace(":",""),
                description : req.body.description.trim().replace(":",""),
                image : req.files.length != 0 ? req.files.map(image => image.filename) : [`default-image.png`],
                price : +req.body.price,
                discount : req.body.discount ? +req.body.discount : 0,
                category : req.body.category,
                type : req.body.type,
                payMethod : +req.body.payMethod,
            }
            products.push(product)
            fsMethods.saveProducts(products);
          
            res.redirect('/');
        }else{
            req.files.forEach(image => fsMethods.deleteFile(`../public/images/products/${image.filename}`))
            res.render("productLoading",{
                errors : errors.mapped(),
                old : req.body,
                oldImages : req.files
            })
        }
    },

    edit : (req,res)=>{ res.render('productEdit',{product : products.find(product=> product.id==req.params.id)})},

    update : (req,res)=> {
        const errors = validationResult(req);

        let oldImages,images;

        if(errors.isEmpty()){
            products.forEach(product => {
                if(product.id == req.params.id){
                        
                    oldImages = product.image.map(imageName => imageName) ;
    
                    images = product.image.filter((item,index) => index != req.body.deleteImages[index])
                    req.files.length != 0 ? req.files.forEach(file => images.push(file.filename)) : null
                    
                    product.name = req.body.name.trim().replace(":","");
                    product.description = req.body.description.trim().replace(":","");
                    product.price = +req.body.price;
                    product.discount = +req.body.discount;
                    product.category = req.body.category;
                    product.type = req.body.type;
                    product.payMethod = +req.body.payMethod;
                    product.image = images.length != 0 ? images : ["default-image.png"];
                    
                }
            });
            
            fsMethods.saveProducts(products);
            req.body.deleteImages.forEach((image,index) => {if(image != 6 && typeof oldImages[index] != "undefined" && oldImages[index] != "default-image.png") fsMethods.deleteFile(`../public/images/products/${oldImages[index]}`)})
            res.redirect(`/products/detail/${req.params.id}`);
        }else{
            req.files.forEach(image => fsMethods.deleteFile(`../public/images/products/${image.filename}`))
            res.render("productEdit",{
                errors : errors.mapped(),
                old : req.body,
                product : products.find(product=> product.id==req.params.id)
            })
        }
    },

    destroy : (req,res) => {

        for (let posicion = 0; posicion < products.length; posicion++) {
            if (products[posicion].id == req.params.id){
                products[posicion].image.forEach(item => item != "default-image.png" ? fsMethods.deleteFile(`../public/images/products/${item}`) : null)
                products.splice(posicion, 1) 
            }
            
        }

        fsMethods.saveProducts(products);
        res.redirect('/');

   }
}



