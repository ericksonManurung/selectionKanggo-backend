'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderTransaction.belongsTo(models.User)
      OrderTransaction.belongsTo(models.MasterProduct)
    }
  };
  OrderTransaction.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "user_id null!!"
        }
      }
    },
    MasterProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "MasterProductId null!!"
        }
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "amount can not be null"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "status can not be null"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'OrderTransaction',
  });
  return OrderTransaction;
};