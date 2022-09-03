module.exports = (sequelize,dataTypes) => {

    const alias = "detailOrder"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        orderId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        productId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
      
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

    }

    const config = {
        timestamps: false,
        tableName: "detailorder",
    }

    const DetailOrder = sequelize.define(alias,cols,config);

    DetailOrder.associate = models =>{

        DetailOrder.belongsTo(models.orders,{
            as: "order",
            foreignKey: "orderId"
        })

        DetailOrder.belongsTo(models.products,{
            as: "product",
            foreignKey: "productId"
        })
    }

    return DetailOrder ; 

}