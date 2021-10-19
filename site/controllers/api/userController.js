const db = require("../../database/models");
const bcrypt = require('bcryptjs');


module.exports = {

    listEmails : (req,res) =>{
        db.users.findAll()
        .then(users =>{

            const emails = users.map(user => user.email)

            res.json(emails)
        }).catch(err =>{
            console.log(err);
        })
    },

    changePass : (req,res) =>{
        db.users.findOne({
            where : {
                id : req.params.id
            }
        }).then(user => {
            if(bcrypt.compareSync(req.body.actPass,user.password)){
                db.users.update({
                    password : bcrypt.hashSync(req.body.newPass,12)
                },{
                    where : {
                        id : user.id
                    }
                }).then(passUpdated =>{
                    const response = {
                        status : 200,
                        msg : "password updated"
                    }
        
                    res.status(200).json(response);
                }).catch(err =>{
                    console.log(err);

                    const response = {
                        status : 400,
                        msg : "bad request"
                    }
        
                    res.status(400).json(response);
                })
            }else{
                const response = {
                    status : 401,
                    msg : "invalid credentials"
                }
    
                res.status(401).json(response);                
            }
        }).catch(err =>{
            console.log(err);

            const response = {
                status : 500,
                msg : "internal server error"
            }

            res.status(500).json(response);
        })
    },

    logout : (req,res) => {
        req.session.destroy()
        res.cookie("rememberSession",null, {maxAge: -1})
        res.status(200).json("ok")
    },
}