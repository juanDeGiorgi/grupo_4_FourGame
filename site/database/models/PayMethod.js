module.exports = (sequelize,dataTypes) => {

    const alias = "payMethods"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type:dataTypes.STRING(255),
            allowNull: false,
        },

    }

    const config = {
        timestamps: true,
        tableName: "paymethods",
    }


    const PayMethod = sequelize.define(alias,cols,config);

    PayMethod.associate = (models) => {

        PayMethod.hasMany(models.orders,{
            as: "orders",
            foreignKey: "payMethodId"
        })
    }

    return PayMethod; 

}