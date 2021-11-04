const path= require('path');
const fs = require('fs');
const fsMethods = require("../utils/fsMethods");
const bcrypt = require('bcryptjs');
const {validationResult, Result} = require('express-validator');
const fetch = require("node-fetch")

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const YOUR_API_KEY = process.env.SENDGRID_KEY;
const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:YOUR_API_KEY
    }
})) 

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require('../database/models');
const { Op } = require('sequelize');


module.exports={

    login : (req,res)=> res.render('login'),

    processLogin: (req, res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){

            db.users.findOne({
                where : {
                    email : req.body.email
                 },

                include : [
                    {association: "productFavorites",attributes : ["id"]},
                ]
            }).then(user => {

                db.users.update({
                    loginDate : new Date
                },{
                    where : {
                        id : user.id
                    }
                })

                let favoritesModify = user.productFavorites.map(favorite => favorite.id)

                req.session.userLogged = {
                    id : user.id,
                    name: user.name,
                    image: user.image,
                    access: user.accessId,
                    favorites: favoritesModify
                }

                if (req.body.rememberSession) {
                    res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                } 
                
                res.redirect(`/`)
            })
        }else{
            res.render('login' ,{
                errors : errors.mapped()
            })
      }
    },

    register : (req,res)=> res.render('register'),
   
    processRegister : (req,res) => {
      
        const errors = validationResult(req);

        if(errors.isEmpty()){

            db.users.create({
                name : req.body.name,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                access : 1,
                image : req.file ? req.file.filename : "default-user-image.png",
                loginDate : new Date
            }).then(userCreated => {

                transporter.sendMail({
                    to: userCreated.email,
                    from: process.env.SENDGRID_EMAIL,
                    subject: "Bienvenido a Four Game!!!",
                    html: `<h3>Bienvenido!!! gracias por registrarte</h3>`
                }).then(result =>{
                    console.log(result);
                }).catch(err =>{
                    console.log(err);
                })

                req.session.userLogged = {
                    id : userCreated.id,
                    name: userCreated.name,
                    image: userCreated.image,
                    access: userCreated.accessId,
                    favorites: []
                }

                if (req.body.rememberSession) {
                    res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                } 

                res.redirect(`/users/profile/${userCreated.id}`)

               })

        }else{
            res.render("register",{
                errors : errors.mapped(),
                old : req.body
            })
       }
    },

    logout : (req,res) => {
        req.session.destroy()
        res.cookie("rememberSession",null, {maxAge: -1})
        res.cookie("rememberCartUser",null, {maxAge: -1})
        res.redirect('/')
    },

    profile : (req,res) => {
        db.users.findByPk(req.params.id,{
            include : [
                {association: "address"},
                {association: "productFavorites",include: [
                    {association: "images"}
                ]}
            ]
        })
        .then(user=> {
            res.render('userProfile',{user,toThousand})
        })
    },

    updateProfile : (req,res) => {
        const errors = validationResult(req);
        let oldImage,image

        if(errors.isEmpty()){

            db.users.findByPk(req.params.id)
            .then(user => {
                oldImage = user.image
                image = req.file ? req.file.filename : user.image

                db.users.update({
                    name: req.body.name,
                    image : image 
                },{
                    where : {
                        id : req.params.id
                    }
                }).then(result => {
                    db.users.findByPk(req.params.id,{ include : [
                        {association: "productFavorites",attributes : ["id"]}
                    ]})
                    .then(userUpdated =>{
                        let favoritesModify = userUpdated.productFavorites.map(favorite => favorite.id)

                        req.session.save(err => {
                            req.session.userLogged = {
                                id : userUpdated.id,
                                name: userUpdated.name,
                                image: userUpdated.image,
                                access: userUpdated.accessId,
                                favorites: favoritesModify
                            }
                            if (req.cookies.rememberSession) {
                                res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                            }   
                            
                            req.file && oldImage != "default-user-image.png" ? fsMethods.deleteFile(`../public/images/users/${oldImage}`) : null; 
                            // req.body.deleteImage != "noBorrar" && oldImage != "default-user-image.png" ? fsMethods.deleteFile(`../public/images/users/${oldImage}`) : null; 
                            res.redirect(`/users/profile/${userUpdated.id}`)
                        })
                    })
                })
            })
       
        }else{
            req.file ? fsMethods.deleteFile(`../public/images/users/${req.file.filename}`) : null

            db.users.findByPk(req.params.id)
            .then(user => {
                res.render("userProfile",{
                   errors : errors.mapped(),
                   old : req.body,
                   user : user
                })   
            })


        }
    },

    address : (req,res) => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(result => result.json())
        .then(arg => {
            res.render('address',{
                arg
            })
        })

    },
    
    createAddress : (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            db.address.create({
                street: req.body.street,
                number: req.body.number,
                postalCode: req.body.postalCode,
                neighborhood: req.body.neighborhood,
                note: req.body.notes,
                state: req.body.state,
                userId: req.params.id
            }).then(addressCreated =>{
                res.redirect(`/users/profile/${req.params.id}`)
            })
        }else{   
            fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(result => result.json())
            .then(arg => {
                res.render('address',{
                    arg,
                    old : req.body,
                    errors : errors.mapped()
                })
            })    
        }
    },

    editAddress : (req,res) =>{
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(result => result.json())
        .then(arg =>{
            db.address.findOne({
                where : {
                    userId : req.params.id
                }
            }).then(address =>{
                res.render("addressEdit",{
                    address,
                    arg
                })
            })
        })
    },

    updateAddress : (req,res) =>{
        const errors = validationResult(req);

        if(errors.isEmpty()){
            db.address.update({
                street: req.body.street,
                number: req.body.number,
                postalCode: req.body.postalCode,
                neighborhood: req.body.neighborhood,
                note: req.body.notes,
                state: req.body.state
            },{
                where : {
                    userId : req.params.id
                }
            }).then(addressUpdated =>{
                res.redirect(`/users/profile/${req.params.id}`)
            })
        }else{
            fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(result => result.json())
            .then(arg => {
                res.render('addressEdit',{
                    arg,
                    old : req.body,
                    errors : errors.mapped()
                })
            })   
        }
    }
}