'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(pass){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(pass.password, salt);
        pass.password = hash
      }
    },
    modelName: 'User',
  });
  return User;
};