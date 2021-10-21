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
        }

    }

    const config = {
        timestamps: true,
        tableName: "orders",
    }



    const Order = sequelize.define(alias,cols,config);

    Order.associate = (models) => {

        Order.belongsTo(models.users,{
            as: "user",
            foreignKey: "userId"
        })

        Order.hasMany(models.detailOrder,{
            as: "details",
            foreignKey : "orderId",
        })
    }

    return Order ; 

}