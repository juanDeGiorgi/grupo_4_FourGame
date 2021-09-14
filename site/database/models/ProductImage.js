module.exports = (sequelize,dataTypes) => {

    const alias = "productImages"; 

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

        productId: {
            Type: dataTypes.INTEGER,
            allowNull: false,
        }

    }

    const config = {
        timestamps = true,
        tableName= "productImages",
    }

    const ProductImage = sequelize.define(alias,cols,config);

    return ProductImage; 

}