'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payment.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "order_id payment null!!"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "status payment null!!"
        }
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "amount payment null!!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};