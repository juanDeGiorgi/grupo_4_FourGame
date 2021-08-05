const fs = require('fs');
const path= require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const products= require('../data/products')

module.exports={

    detail : (req,res)=> res.render('detailProduct',{
        product : products.find(product=>product.id== +req.params.id),
        toThousand,
        relatedProducts : products
    }),

    loading : (req,res)=> res.render('productLoading'),
  
    save : (req,res) => {
        let product= {
            id : products[products.length-1].id +1,
            name : req.body.name,
            description : req.body.description,
            image : "default-image.png",
            price : +req.body.price,
            discount : +req.body.discount,
            category : req.body.category,
            type : req.body.type,
            payMethod : +req.body.payMethod,
        }
   products.push(product)
   fs.mkdirSync(path.join(__dirname,`../public/images/${product.type}/${product.name}`))
   fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(products),'utf-8') 
   res.redirect('/')
    },

    edit : (req,res)=> res.render('productEdit'),
   
    update : (req,res)=> {

    },
    destroy : (req,res)=> {

   }
}

