const path= require('path');
const fs= require('fs');
const users=require('../data/users_db')
const bcrypt= require('bcryptjs')
const {validationResult}= require('express-validator')


module.exports={
    login : (req,res)=> res.render('login'),

    register : (req,res)=> res.render('register'),
   
    processRegister : (req,res) => {
      
        const errors = validationResult(req);

        if(errors.isEmpty()){
            let newUser = {
                id : users[users.length-1].id +1,
                name: req.body.name,
                email: req.body.email,
                password : bcrypt.hashSync(req.body.password,12),
                acces: "user",
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
    }
}