'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tradingName: {
        type: Sequelize.STRING,
      },
      cashforceTax: {
        type: Sequelize.STRING,
      },
      responsibleName: {
        type: Sequelize.STRING,
      },
      responsibleEmail: {
        type: Sequelize.STRING,
      },
      responsiblePosition: {
        type: Sequelize.STRING,
      },
      responsiblePhone: {
        type: Sequelize.STRING,
      },
      responsibleMobile: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
      complement: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      situation: {
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
          key: 'id',
          model: 'cnpjs',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buyers');
  }
}

