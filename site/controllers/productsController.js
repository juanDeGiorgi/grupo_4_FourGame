const path= require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const products= require('../data/products')

module.exports={

    detail : (req,res)=> res.render('detailProduct',{
        product : products.find(product=>product.id== +req.params.id)
    }),

    loading : (req,res)=> res.render('productLoading'),
  
    save : (req,res) => {

    },

    edit : (req,res)=> res.render('productEdit'),
   
    update : (req,res)=> {

    },
    destroy : (req,res)=> {

   }
}

