const path= require('path');
const fs = require('fs');
const fsMethods = require("../utils/fsMethods");
const bcrypt = require('bcryptjs');
const {validationResult, Result} = require('express-validator');

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
                 }
            }).then(user => {

                db.users.update({
                    loginDate : new Date
                },{
                    where : {
                        id : user.id
                    }
                })

                req.session.userLogged = {
                    id : user.id,
                    name: user.name,
                    image: user.image,
                    access: user.accessId,
                }

                if (req.body.rememberSession) {
                    res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                } 

                res.redirect(`/users/profile/${user.id}`)
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

                req.session.userLogged = {
                    id : userCreated.id,
                    name: userCreated.name,
                    image: userCreated.image,
                    access: userCreated.accessId,
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
        res.redirect('/')
    },

    profile : (req,res) => {
        db.users.findByPk(req.params.id)
        .then(user=> {
            res.render('userProfile',{user})
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
                    email : req.body.email,
                    accessId : +req.body.access,
                    image : image != req.body.deleteImage ? image : "default-user-image.png"
                },{
                    where : {
                        id : req.params.id
                    }
                }).then(result => {
                    db.users.findByPk(req.params.id)
                    .then(userUpdated =>{
                        req.session.save(err => {
                            req.session.userLogged = {
                                id : userUpdated.id,
                                name: userUpdated.name,
                                image: userUpdated.image,
                                access: userUpdated.accessId,
                            }
                            if (req.cookies.rememberSession) {
                                res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                            }   
                            
                            req.body.deleteImage != "noBorrar" && oldImage != "default-user-image.png" ? fsMethods.deleteFile(`../public/images/users/${oldImage}`) : null; 
                            res.redirect("/")
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
    }

}