module.exports = function(sequelize, DataTypes) {
  var Step3 = sequelize.define("Step3", {
    brightTank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    transferDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    transferVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    kegDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    kegVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    }
  });

  Step3.associate = function(models) {
    Step3.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Step3;
};
