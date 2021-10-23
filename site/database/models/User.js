module.exports = (sequelize,dataTypes) => {

    const alias = "users"; 

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

        email: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },

        image: {
            type: dataTypes.STRING(255),
            allowNull: false,
            defaultValue: 'default-user-image.png',
        },

        password: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },

        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },

        loginDate: {
            type: dataTypes.DATE,
            allowNull: false,
            defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        },

        delete: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: 0,
        },

        accessId: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }


    }

    const config = {
        timestamps: true,
        tableName: "users",
    }



    const User = sequelize.define(alias,cols,config);

    User.associate = (models) => {
        User.hasMany(models.products,{
            as : "products",
            foreignKey: "userId",
        }),

        User.belongsTo(models.access,{
            as: "access",
            foreignKey: "accessId"
        }),

        User.hasOne(models.address,{
            as: "address",
            foreignKey: "userId"
        }),

        User.hasMany(models.orders,{
            as: "orders",
            foreignKey:"userId"
        })

        User.belongsToMany(models.products,{
            as: "productFavorites",
            through: "favorites",
            foreignKey : "userId",
            otherKey : "productId"
        })
    }

    return User ; 

}