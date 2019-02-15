module.exports = function(sequelize, DataTypes) {
  var Stage3 = sequelize.define("Stage3", {
    brightTank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    transferDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },

    transferVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    kegDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },

    kegVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    }
  });

  Stage3.associate = function(models) {
    Stage3.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Stage3;
};
