module.exports = (sequelize, dataTypes) => {
  let alias = 'Product'; 
  let cols = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reference:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
   },
   quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
   },
 
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
};
let config = {
  timestamps: false
}
const Product= sequelize.define(alias,cols,config);

Product.associate = function (models) {
  Product.belongsTo(models.Shopping, { 
      as: "shopping",
      foreignKey: "shopping_id"
  })  
}

return Product
}