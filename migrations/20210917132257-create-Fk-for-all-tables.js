'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('OrderTransactions', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fkey_user_id_OrderTransactions',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    queryInterface.addConstraint('OrderTransactions', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fkey_product_id_OrderTransactions',
      references: { //Required field
        table: 'MasterProducts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    queryInterface.removeConstraint('OrderTransactions', 'fkey_user_id_OrderTransactions')
    queryInterface.removeConstraint('OrderTransactions', 'fkey_product_id_OrderTransactions')
  }
};
