const db = require("../../database/models");


module.exports = {

    createOrder : async (req,res) =>{
        try {
            const productToAdd = await db.products.findByPk(req.body.productId)
            
            const pendingOrder = await db.orders.findOne({
                where : {
                    status: 0,
                    userId: req.body.userId
                },
                include : [
                    {association: "details"}
                ]
            })

            if(pendingOrder){
                await db.orders.update({
                    finalPrice: pendingOrder.finalPrice + (Math.round(productToAdd.price - ((productToAdd.discount / 100) * productToAdd.price)) * req.body.productQuantity)
                },{
                    where: {
                        id : pendingOrder.id
                    }
                })

                let productPendingExist = false;

                await pendingOrder.details.forEach(async detail => {
                    if(detail.productId == productToAdd.id){
                        productPendingExist = true
                        await db.detailOrder.update({
                            quantity: detail.quantity + req.body.productQuantity
                        },{
                            where: {
                                id: detail.id
                            }
                        })
                    }
                });

                if(!productPendingExist){
                    await db.detailOrder.create({
                        orderId: pendingOrder.id,
                        productId: productToAdd.id,
                        quantity: +req.body.productQuantity
                    })
                }
        
            }else{
                const newOrder = await db.orders.create({
                    finalPrice: Math.round(productToAdd.price - ((productToAdd.discount / 100) * productToAdd.price)) * +req.body.productQuantity,
                    status: 0,
                    cardQuantity: 1,
                    userId: req.body.userId
                })

                const newDetail = await db.detailOrder.create({
                    orderId: newOrder.id,
                    productId: productToAdd.id,
                    quantity: +req.body.productQuantity
                })
            }

            res.status(201).json("order created successfully");
        } catch (err) {
            console.log(err);
            res.status(500).json("internal server error")
        }
    },

    show : (req,res) =>{
        const orderToShow = []

        if(req.session.userLogged){
            db.orders.findOne({
                where:{
                    userId: +req.session.userLogged.id,
                    status: 0
                },
                include: [
                    {association: "details",include:[
                        {association: "product",include:[
                            {association: "images"}
                        ]}
                    ]}
                ]
            }).then(order =>{
                if(order){
                    order.details.forEach(detail => {
                        const product = {
                            id: detail.productId,
                            name: detail.product.name,
                            image: detail.product.images[0].name,
                            quantity: detail.quantity,
                            price: Math.round(detail.product.price - ((detail.product.discount / 100) * detail.product.price)) * detail.quantity,
                            orderId: order.id
                        }
                        
                        orderToShow.push(product)
                    });
                }

                res.status(200).json(orderToShow)
            }).catch(err =>{
                console.log(err);
                res.status(200).json(orderToShow)
            })
        }else{
            res.status(204).json(orderToShow)
        }
    },

    deleteOrder : (req,res) =>{
        if(req.session.userLogged){
            db.orders.destroy({
                where:{
                    userId: +req.session.userLogged.id,
                    status: 0
                }
            }).then(result =>{
                res.status(200).json("order deleted")
            }).catch(err =>{
                console.log(err);
                res.status(404).json("not found")
            })
        }else{
            res.status(400).json("bad request")
        }
    }

}