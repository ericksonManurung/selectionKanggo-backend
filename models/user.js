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
      User.hasMany(models.OrderTransaction)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name can not be null"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email can not be null"
        },
        isEmail: {
          args: true,
          msg: "Format email must be ex: john@mail.com"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password can not be null"
        },
        len: {
          args: 8,
          msg: "Character for password minimal 8"
        }
      }
    }
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