/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    batchNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brewerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    fermenter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brewDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  Beer.associate = function(models) {
    Beer.hasOne(models.Step1, {
      onDelete: "cascade"
    });
  };

  Beer.associate = function(models) {
    Beer.hasOne(models.Step2, {
      onDelete: "cascade"
    });
  };

  Beer.associate = function(models) {
    Beer.hasOne(models.Step3, {
      onDelete: "cascade"
    });
  };

  return Beer;
};
