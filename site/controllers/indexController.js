const path= require('path');
const db = require("../database/models");
const {Op} = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index : (req,res)=>{
        db.products.findAll({
            include : [
                {association : "category"},
                {association : "type"},
                {association : "images"}
            ]
        })
            .then(products =>{
                res.render('index',{
                    products,
                    toThousand
                })
            })
        },

    about : (req,res)=> res.render('about'),

    search : (req,res) => {
        db.products.findAll({
            include :  [  //1er parámetro petición
                {association : "category", 
                   where : {
                     id : {
                        [Op.substring] : req.query.categoryId ? req.query.categoryId : ''
                     }
                 }                       
                 },
                {association : "type",
                   where : {
                        id : {
                            [Op.substring] : req.query.typeId ? req.query.typeId : ''
                        }
                    }
                },
                {association : "images"}
            ],
            where : {    //2do parámetro petición
                name : {
                    [Op.substring] : req.query.name ? req.query.name : ''
                }
            },
            order : [    //3er parámetro petición
               ['price',req.query.price ? req.query.price : 'ASC']
            ]
        
        }).then(products => {
            // if(products.length == 0){
            //     return Promise.reject() //Si no hay productos nos expulsa y continúa con el catch().
            // }
            // res.json(products)
            res.render("search",{
                products,
                toThousand,
                name : req.query.name,
                price : req.query.price,
                categoryId : req.query.categoryId,
                typeId : req.query.typeId                
            })
        }).catch(err=> {
            res.json('Productos no encontrados')
        })
    }

}