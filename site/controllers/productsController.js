const path= require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports={
    detail : (req,res)=> res.render('detailProduct'),

    loading : (req,res)=> res.render('productLoading'),

    edit : (req,res)=> res.render('productEdit'),

}

