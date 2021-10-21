const db = require("../../database/models");


module.exports = {

    createOrder : async (req,res) =>{
        try {
            const productToAdd = await db.findByPk(req.body.productId)
            
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
                const updatedOrder = await db.orders.update({
                    finalPrice: pendingOrder.finalPrice + (productToAdd.price * +req.body.productQuantity)
                },{
                    where: {
                        id : pendingOrder.id
                    }
                })

                pendingOrder.details.forEach(async detail => {
                    if(detail.productId == productToAdd.id){
                        const updatedDetail = await db.detailOrder.update({
                            quantity: detail.quantity + req.body.productQuantity
                        },{
                            where: {
                                id: detail.id
                            }
                        })
                    }else{
                        const newDetail = await db.detailOrder.create({
                            orderId: updatedOrder.id,
                            productId: productToAdd.id,
                            quantity: +req.body.productQuantity
                        })
                    }
                });
            }else{
                const newOrder = await db.orders.create({
                    finalPrice: productToAdd.price * +req.body.productQuantity,
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
    }
}