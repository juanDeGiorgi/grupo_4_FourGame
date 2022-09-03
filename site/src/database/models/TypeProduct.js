module.exports = (sequelize,dataTypes) => {

    const alias = "typeProducts"; 

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
        timestamps: false,
        tableName: "typeproducts",
    }


    const TypeProduct = sequelize.define(alias,cols,config);

    TypeProduct.associate = (models) => {
        TypeProduct.hasMany(models.products,{
            as : "products",
            foreignKey: "typeProductId"
        })
    }

    return TypeProduct; 

}