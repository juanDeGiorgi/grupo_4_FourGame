const path= require('path');


module.exports={
    detail : (req,res)=> res.render('detailProduct'),

    loading : (req,res)=> res.render('productLoading'),
}