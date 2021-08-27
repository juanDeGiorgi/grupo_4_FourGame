const path= require('path');
const fs= require('fs');
const users=require('../data/users_db');
const bcrypt= require('bcryptjs');
const {validationResult}= require('express-validator');



module.exports={

    login : (req,res)=> res.render('login'),

    processLogin: (req, res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email );
            req.session.userLogged = {
                id : user.id,
                name : user.name,
                access : user.access,
                }
         if (req.body.rememberSession) {
             res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});

         }       

         res.redirect('/');

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
            let newUser = {
                id : users[users.length-1].id +1,
                name: req.body.name,
                email: req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                access: "user",
                image:  req.file ? req.file.filename : "default-image.png",
            }
            users.push(newUser)
           // utils.saveFile(users)
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users,null,2), "utf-8") 
            res.redirect('/')

        }else{
            res.render("register",{
                errors : errors.mapped() 
            })
       }
    },

    logout : (req,res) => {
        req.session.destroy()
        res.cookie("rememberSession",null, {maxAge: -1})
        res.redirect('/')
    },

    profile : (req,res) => res.render("userProfile"),

    updateProfile : (req,res) => {

    }
}