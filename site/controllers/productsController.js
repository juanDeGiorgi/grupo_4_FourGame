const fs = require('fs');
const path= require('path');
const fsMethods = require("../utils/fsMethods");
const {validationResult} = require('express-validator')
const fetch = require("node-fetch")

const db = require('../database/models')
const {Op} = require("sequelize");

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
                fetch("https://apis.datos.gob.ar/georef/api/provincias")
                .then(result => result.json())
                .then(arg => {
                    res.render('detailProduct', {
                        product,
                        relatedProducts : relatedProducts.products,
                        toThousand,
                        arg
                    })
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
                      nameImages.forEach(nameImage=> {
                         let newImage ={ 
                           productId: newProduct.id,
                           name: nameImage,
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
                res.redirect(`/products/detail/${newProduct.id}`);
            })

        }else{
            try {
                fs.readdir(path.join(__dirname,"../public/images/products"),(errorFs,productsFolder) =>{
                    req.files.forEach(file => {
                      productsFolder.includes(file.filename) ? fsMethods.deleteFile(`../public/images/products/${file.filename}`) : null;
                    })
                    
                    res.render("productLoading",{
                        errors : errors.mapped(),
                        old : req.body,
                        oldImages : req.files
                    })
                })
            } catch (err) {
                console.log(err);
                res.render("productLoading",{
                    errors : errors.mapped(),
                    old : req.body,
                    oldImages : req.files
                })
            }
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
            return res.render("productEdit",{
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
                console.log(req.body.deleteImages);
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
                            let images = [];
                            let nameImages= req.files.map(image => image.filename);
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

        db.productImages.findAll({
            where : {
                productId : req.params.id
            }
        }).then(images =>{
            
            fs.readdir(path.join(__dirname,"../public/images/products"),(errorFs,productsFolder) =>{
                images.forEach(image => {
                  productsFolder.includes(image.name) && image.name != "default-image.png" ? fsMethods.deleteFile(`../public/images/products/${image.name}`) : null;
                })
            })

            db.products.destroy({
                where : {
                    id : req.params.id
                }
            }).then(result =>{
                res.redirect('/')
                
            }).catch(err=> res.send(err))
        })
   },

   search : (req,res) =>{
    db.products.findAll({
        where : {
            name : {
                [Op.substring] : req.query.search
            }
        }
    }).then(results =>{
        res.json(results)
    })
}
}



