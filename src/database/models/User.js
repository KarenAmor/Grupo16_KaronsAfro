module.exports = (sequelize, dataTypes) => {
  let alias = 'User'; 
  let cols  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  first_name: {
    type: dataTypes.STRING(100),
    allowNull: false
},
last_name: {
  type: dataTypes.STRING(100),
  allowNull: false
},
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  //confirmar contraseña
  role: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  //avatar
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
};
let config = {
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
