module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping'; 
    let cols = {
        id:  {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
   
    user_id: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: USER_TABLE,
        key: 'id'
      }    
    },

    envoice_id: {
        field: 'envoice_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ENVOICE_TABLE,
          key: 'id'
        }   
      },

     product_id: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ENVOICE_TABLE,
          key: 'id'
        },     
      },
  };
  let config = {
    timestamps: false,
    
  }
  const Shopping= sequelize.define(alias, cols, config);
  
  Shopping.associate = function(models) {
    Shopping.hasMany(models.User, { 
              as: "shopping", 
              foreignKey: "user_id"
          })
          Shopping.belongsToMany(models.product, { 
            as: "product",
            foreignKey: 'product_id',
            otherKey: 'envoice_id',
            timestamps: false
        })
      }
  
      return Envoice
  };