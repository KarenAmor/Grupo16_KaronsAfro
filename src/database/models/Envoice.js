module.exports = (sequelize, dataTypes) => {
  let alias = 'Envoice'; 
  let cols = {
      id:  {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  shopping_id: {
    field: 'shopping_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SHOPPING_TABLE,
      key: 'id'
    },
   },
 
  user_id: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
   
  }
};
let config = {
  timestamps: false,
  
}
const Envoice= sequelize.define(alias, cols, config);

Envoice.associate = function(models) {
  Envoice.hasMany(models.User, { 
            as: "envoice", 
            foreignKey: "user_id"
        })
Envoice.belongsToMany(models.Shopping, { 
          as: "shopping",
          foreignKey: 'envoice_id',
          otherKey: 'product_id',
          timestamps: false
      })
    }

    return Envoice
};


