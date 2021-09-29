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
                        [Op.substring] : req.params.categoryId ? req.params.categoryId : ''
                     }
                 }                       
                 },
                {association : "type",
                   where : {
                        id : {
                            [Op.substring] : req.params.typeId ? req.params.typeId : ''
                        }
                    }
                },
                {association : "images"}
            ],
            where : {    //2do parámetro petición
                name : {
                    [Op.substring] : req.params.name ? req.params.name : ''
                }
            },
            order : [    //3er parámetro petición
               ['price',req.params.price ? req.params.price : 'ASC']
            ]
        
        }).then(products => {
            if(!products){
                return Promise.reject() //Si no hay productos nos expulsa y continúa con el catch().
            }
            res.json(products)
        }).catch(err=> {
            res.json('Productos no encontrados')
        })
    }

}