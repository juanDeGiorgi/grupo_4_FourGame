const fs = require('fs');
const path= require('path');
const fsMethods = require("../utils/fsMethods");
const {validationResult} = require('express-validator')
const db = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// const products= require('../data/products')



module.exports={


    detail : (req,res) => {
    
        db.products.findByPk(req.params.id,{
            include : [
                {association : "category"},
                {association : "type"},
                {association : "images"}
            ]
        }).then(product => {
            db.typeProducts.findOne({
                where : {
                    id : product.typeProductId,
                },

                include : [     
                    { 
                      association : 'products',
                        include : [                       
                            {association : "category"},
                            {association : "type"},
                            {association : "images"}
                        ]  
                    }
                ]
            }).then(relatedProducts => {
                res.render('detailProduct', {
                    product,
                    relatedProducts : relatedProducts.products,
                    toThousand
                })
            })
        })
        
    },


    loading : (req,res) => res.render('productLoading'),
  

    save : (req,res) => {

        const errors = validationResult(req);

        if(errors.isEmpty()){

            db.products.create({
                
                name: req.body.name.trim() ,
                price: +req.body.price,
                discount: +req.body.discount ,
                description: req.body.description.trim() ,
                categoryId: +req.body.category  ,
                userId: +req.params.id ,
                typeProductId: +req.body.type,
            }).then(newProduct => {
             
                if (req.files.length>0) {
                      let images =[];
                      let nameImages= req.files.map(image=>image.filename);
                      nameImages.forEach(img=> {
                         let newImage ={ 
                           productId: newProduct.id,
                           name: img,
                         }
                         images.push(newImage)
                      })
                 db.productImages.bulkCreate(images,{validate : true })
                }
                else{
                    db.productImages.create({
                        productId: newProduct.id,
                        name: 'default-image.png',
                    })
                }
                res.redirect('/');
            })

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



