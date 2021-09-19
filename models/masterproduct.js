'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterProduct.hasMany(models.OrderTransaction)
    }
  };
  MasterProduct.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name Product can not be null"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "price can not be null"
        }
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "price can not be null"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MasterProduct',
  });
  return MasterProduct;
};