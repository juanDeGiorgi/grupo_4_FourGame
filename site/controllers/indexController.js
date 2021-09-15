const path= require('path');

const products= require('../data/products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    index : (req,res)=> res.render('index',{
        products,
        toThousand
    }),

    about : (req,res)=> res.render('about'),

}