module.exports = (sequelize, DataTypes) => {
  const buyers = sequelize.define('buyers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradingName: {
      type: DataTypes.STRING,
    },
    cashforceTax: {
      type: DataTypes.STRING,
    },
    responsibleName: {
      type: DataTypes.STRING,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    situation: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    cnpjId: {
      type: DataTypes.INTEGER,
    },
    confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: {
      type: DataTypes.STRING,
    }
  });

  buyers.associate = (models) => {
    buyers.belongsTo(models.cnpjs, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
  }

  return buyers;

}