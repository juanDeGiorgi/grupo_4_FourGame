module.exports = (sequelize,dataTypes) => {

    const alias = "products"; 

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

        price: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        discount: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },

        description: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },

        deletedAt: {
            type:dataTypes.DATE,
            allowNull: true
        },

        delete: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0,
        },

        categoryId: {
            type : dataTypes.INTEGER,
            allowNull:false,
        },

        userId: {
            type : dataTypes.INTEGER,
            allowNull:false,
        },

        typeProductId: {
            type : dataTypes.INTEGER,
            allowNull:false,
        },

    }

    const config = {
        timestamps: true,
        tableName: "products",
    }

    const Product = sequelize.define(alias,cols,config);
    
    
    Product.associate= (models) => {
        
        Product.belongsTo(models.categories,{
            as : "category",
            foreignKey: "categoryId"
        }),
        Product.belongsTo(models.typeProducts,{
            as :"type",
            foreignKey: "typeProductId"
        }),
        Product.belongsTo(models.users,{
            as : "user",
            foreignKey: "userId"
        }),
        Product.hasMany(models.productImages,{
            as: "images",
            foreignKey: "productId"
        }),

        Product.hasMany(models.detailOrder,{
            as:"orders",
            foreignKey: "productId",
        }),

        Product.belongsToMany(models.users,{
            as: "userFavorites",
            through: "favorites",
            foreignKey : "productId",
            otherKey : "userId"
        })
     }
    
    return Product ; 

}