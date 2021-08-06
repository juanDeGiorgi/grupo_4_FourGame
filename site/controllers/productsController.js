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

    loading : (req,res)=> res.render('productLoadingv2'),
  
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

    edit : (req,res)=>{ res.render('productEditv2',{product : products.find(product=> product.id==req.params.id)
    })
},
    update : (req,res)=> { 
            products.forEach(product => {
                if(product.id == req.params.id){
                     
                    product.name = req.body.name,
                    product.description = req.body.description,
                    product.price = +req.body.price,
                    product.discount = +req.body.discount,
                    product.category = req.body.category,
                    product.type = req.body.type,
                    product.payMethod = +req.body.payMethod

                }
            });
            
            fs.mkdirSync(path.join(__dirname,`../public/images/${req.body.type}/${req.body.name}`));
            fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(products),'utf-8'); 
            res.redirect('/');
    },
    destroy : (req,res)=> {
                for (let posicion = 0; posicion < products.length; posicion++) {
                    if (products[posicion].id == req.params.id){
                            products.splice(posicion, 1) 
                    }
                    
                }
            fs.writeFileSync(path.join(__dirname,'../data/products.json'),JSON.stringify(products),'utf-8'); 
            res.redirect('/');

   }
}

