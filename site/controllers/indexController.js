const path= require('path');

const products= require('../data/products');
const db = require("../database/models")

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
                res.send(products)
            })
        },
    // } res.render('index',{
    //     products,
    //     toThousand
    // }),

    about : (req,res)=> res.render('about'),

}