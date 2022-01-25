module.exports = (sequelize, dataTypes) => {
  let alias = 'User'; 
  let cols  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
  },
  name: {
    type: dataTypes.STRING(100),
    allowNull: false
},
lastname: {
  type: dataTypes.STRING(100),
  allowNull: false
},
  email: {
    allowNull: false,
    type: dataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: dataTypes.STRING(61)
  },
  confirmarPassword: {
    allowNull: false,
    type: dataTypes.STRING(61)
  },  
    avatar: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  rol: {
    allowNull: false,
    type: dataTypes.INTEGER,
  },
};
let config = {
  tableName: "users",
  timestamps: false
};
const User = sequelize.define(alias,cols,config);

User.associate = function (models) {
  User.hasMany(models.Envoice, { 
        as: "users",
        foreignKey: "users_id"
    })
  }

return User
};