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

    createFav : (req,res) => {
        db.favorites.create({
            userId : req.body.userId,
            productId : req.body.productId,
        }).then(favoriteCreated => {
            db.users.findByPk(req.body.userId,{ include : [
                {association: "productFavorites",attributes : ["id"]}
            ]}).then(user =>{

                let favoritesModify = user.productFavorites.map(favorite => favorite.id)

                req.session.save(err => {
                    req.session.userLogged = {
                        id : user.id,
                        name: user.name,
                        image: user.image,
                        access: user.accessId,
                        favorites: favoritesModify
                    }
                    
                    if (req.cookies.rememberSession) {
                        res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                    }

                    const response = {
                        status : 201,
                        msg: 'favoriteCreate'
                    }
        
                    res.status(201).json(response)
                })

            }).catch(err => {
                console.log(err);
                res.status(500).json('Internal server error')
            })
        }).catch(err=> {
            console.log(err);
            res.status(500).json('Internal server error')
        })
    },
    
    deleteFav : (req,res) => {
        db.favorites.destroy({
            where : {
                userId : req.body.userId,
                productId : req.body.productId
            }
        }).then(favDeleted => {
            db.users.findByPk(req.body.userId,{
                include : [{association : 'productFavorites', attributes : ['id']}]
            }).then(user => {

                let favoritesModify = user.productFavorites.map(favorite => favorite.id)

                req.session.save(err=>{
                    req.session.userLogged = {
                        id : user.id,
                        name : user.name,
                        image : user.image,
                        access : user.accessId,
                        favorites : favoritesModify
                    }
                    
                    if (req.cookies.rememberSession) {
                        res.cookie('rememberSession', req.session.userLogged, {maxAge : 10000 * 60});
                    }

                    const response = {
                        status : 200,
                        msg: 'favoritedeleted'
                    }
        
                    res.status(200).json(response)
                })
            }).catch(err=>{
                console.log(err)
                res.status(500).json('internal server error')
            })
            
        }).catch(err=> {
            console.log(err)
            res.status(500).json('internal server error')
        })
        
    }
}