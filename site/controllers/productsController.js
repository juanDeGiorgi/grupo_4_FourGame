const fs = require('fs');
const path= require('path');
const fsMethods = require("../utils/fsMethods");
const {validationResult} = require('express-validator')
const db = require('../database/models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



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
                discount: req.body.discount ? +req.body.discount : 0 ,
                description: req.body.description.trim() ,
                categoryId: +req.body.category  ,
                userId: +req.params.id ,
                typeProductId: +req.body.type,
            }).then(newProduct => {
             
                if (req.files.length > 0) {
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

                }else{
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

    edit : (req,res)=>{
        db.products.findByPk(req.params.id,{
            include : [
                {association : "category"},
                {association : "type"},
                {association : "images"}
            ]
        }).then(product =>{
            res.render("productEdit",{
                product
            })
        })
    },

    update : (req,res)=> {
        const errors = validationResult(req);

        let oldImages,images;

        if(errors.isEmpty()){
            db.productImages.findAll({
                where : {
                    productId : req.params.id
                }
            }).then(images =>{
                oldImages = images.map(image => image.name)

                imagesToDelete = oldImages.filter((item,index) => index == req.body.deleteImages[index])
    
                db.productImages.destroy({
                    where : {
                        name : imagesToDelete
                    }
                }).then(result =>{
                    
                    db.products.update({
                        name: req.body.name.trim() ,
                        price: +req.body.price,
                        discount: req.body.discount ? +req.body.discount : 0,
                        description: req.body.description.trim() ,
                        categoryId: +req.body.category,
                        typeProductId: +req.body.type,
                    },{
                        where : {
                            id : req.params.id
                        }
                    }).then(productUpdated =>{

                        if (req.files.length > 0) {
                            let images =[];
                            let nameImages= req.files.map(image=>image.filename);
                            nameImages.forEach(img=> {
                               let newImage ={ 
                                 productId: req.params.id,
                                 name: img,
                               }
                               images.push(newImage)
                            })
                            db.productImages.bulkCreate(images,{validate : true })
                                .then(result =>{
                                    req.body.deleteImages.forEach((image,index) => {if(image != 6 && typeof oldImages[index] != "undefined" && oldImages[index] != "default-image.png") fsMethods.deleteFile(`../public/images/products/${oldImages[index]}`)})
                                    res.redirect(`/products/detail/${req.params.id}`);
                                })
                        }else{
                            
                            db.productImages.findAll({
                                where : {
                                    productId : req.params.id
                                }
                            }).then(images =>{
                                if(images == 0){
                                    db.productImages.create({
                                        productId: req.params.id,
                                        name: 'default-image.png',
                                    })
                                }
                                
                                req.body.deleteImages.forEach((image,index) => {if(image != 6 && typeof oldImages[index] != "undefined" && oldImages[index] != "default-image.png") fsMethods.deleteFile(`../public/images/products/${oldImages[index]}`)})
                                res.redirect(`/products/detail/${req.params.id}`);
                            })
                        }

                    })
                })
            })
        }else{
            req.files.forEach(image => fsMethods.deleteFile(`../public/images/products/${image.filename}`))
            db.products.findByPk(req.params.id,{
                include : [
                    {association : "category"},
                    {association : "type"},
                    {association : "images"}
                ]
            }).then(product =>{
                res.render("productEdit",{
                    errors : errors.mapped(),
                    old : req.body,
                    product
                })
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



