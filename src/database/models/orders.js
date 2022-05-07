module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING,
    },
    orderFileName: {
      type: DataTypes.STRING,
    },
    orderOriginalName: {
      type: DataTypes.STRING,
    },
    emissionDate: {
      type: DataTypes.STRING,
    },
    pdfFile: {
      type: DataTypes.STRING,
    },
    emitedTo: {
      type: DataTypes.STRING,
    },
    nNf: {
      type: DataTypes.STRING,
    },
    CTE: {
      type: DataTypes.STRING,
    },
    value: {
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
    userId: {
      type: DataTypes.INTEGER,
    },
    buyerId: {
      type: DataTypes.INTEGER,
    },
    providerId: {
      type: DataTypes.INTEGER,
    },
    orderStatusBuyer: {
      type: DataTypes.STRING,
      defaultValue: '0'
    },
    orderStatusProvider: {
      type: DataTypes.STRING,
      defaultValue: '0'
    },
    deliveryReceipt: {
      type: DataTypes.STRING,
    },
    cargoPackingList: {
      type: DataTypes.STRING,
    },
    deliveryCtrc: {
      type: DataTypes.STRING,
    },
  });

  orders.associate = (models) => {
    orders.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    });
    orders.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user',
    }
    );
    orders.belongsTo(models.users, {
      foreignKey: 'buyerId',
      as: 'buyer',
    }
    );
    orders.belongsTo(models.providers, {
      foreignKey: 'providerId',
      as: 'provider',
    }
    );
  }

  return orders

}
