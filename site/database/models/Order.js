module.exports = (sequelize,dataTypes) => {

    const alias = "orders"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        finalPrice: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        status: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0
        },

        cardQuantity: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 1
        },

        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        addressId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        payMethodId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }

    }

    const config = {
        timestamps: true,
        tableName: "orders",
    }



    const Order = sequelize.define(alias,cols,config);

    Order.associate = (models) => {

        Order.belongsTo(models.payMethods,{
            as : "payMethod",
            foreignKey: "payMethodId"
        }),
        Order.belongsTo(models.address,{
            as : "address",
            foreignKey: "addressId"
        })
        Order.belongsTo(models.users,{
            as: "user",
            foreignKey: "userId"
        })
        Order.belongsToMany(models.detailOrder,{
            as: "details",
            through: "detailOrder",
            foreignKey : "orderId",
            otherKey : "productId"
        })
    }

    return Order ; 

}