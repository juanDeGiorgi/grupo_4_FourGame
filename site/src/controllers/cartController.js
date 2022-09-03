const db = require("../database/models");
const path= require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
    cart : async (req,res)=> {
        try {
            const order = await  db.orders.findOne({
                where:{
                    userId: req.params.id,
                    status: 0
                },
                include: [
                    {association: "details",include:[
                        {association: "product",include:[
                            {association: "images"}
                        ]}
                    ]}
                ]
            })

            order ? res.render('cart',{ order, toThousand}) : res.redirect("/")

        } catch (err) {
            console.log(err);
            res.redirect("/")
        }
    }
}