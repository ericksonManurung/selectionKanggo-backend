'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('OrderTransactions', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fkey_UserId_OrderTransactions',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });


    await queryInterface.addConstraint('OrderTransactions', {
      fields: ['MasterProductId'],
      type: 'foreign key',
      name: 'fkey_MasterProductId_OrderTransactions',
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

     await queryInterface.removeConstraint('OrderTransactions', 'fkey_UserId_OrderTransactions')
     await queryInterface.removeConstraint('OrderTransactions', 'fkey_MasterProductId_OrderTransactions')
  }
};
