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
            type: dataTypes.STRING(255),
            allowNull: false,
        },

        productId: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    }

    const config = {
        timestamps: false,
        tableName: "productimages",
    }


    const ProductImage = sequelize.define(alias,cols,config);

    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.products,{
            as: "product",
            foreignKey: "productId"
        })
    }

    return ProductImage; 

}