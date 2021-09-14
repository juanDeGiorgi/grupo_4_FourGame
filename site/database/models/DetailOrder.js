module.exports = (sequelize,dataTypes) => {

    const alias = "detailOrder"; 

    const cols = {
       
        id: {
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        orderId:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        productId:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
      
        quantity:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },

    }

    const config = {
        timestamps = true,
        tableName= "detailOrder",
    }

    const DetailOrder = sequelize.define(alias,cols,config);

    return DetailOrder ; 

}