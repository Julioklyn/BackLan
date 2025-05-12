'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return await queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        token: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      })
  },

  async down (queryInterface, Sequelize) {
      return await queryInterface.dropTable('usuarios')
  }
};
