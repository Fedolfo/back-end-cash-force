'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
      },
      orderFileName: {
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
      },
      emissionDate: {
        type: Sequelize.STRING,
      },
      pdfFile: {
        type: Sequelize.STRING,
      },
      emitedTo: {
        type: Sequelize.STRING,
      },
      nNf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('orders');

  }
};
