module.exports = function(sequelize, DataTypes) {
  var Stage2 = sequelize.define("Stage2", {
    mashWaterVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    strikeTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    mashTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    allInTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    vorlofStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    lauterStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    spargeStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    spargeStopTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    lauterStopTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    spargeWaterVol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    kettleFullVol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    preboilGravity: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    boilStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    whirlpoolStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    whirlpoolStopTime: {
      type: DataTypes.TIME,
      allowNull: true
    },

    knockOutStart: {
      type: DataTypes.TIME,
      allowNull: true
    },

    knockOutStop: {
      type: DataTypes.TIME,
      allowNull: true
    },

    knockOutTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    o2Lpm: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    postboilGravity: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    yeastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },

    yeastGen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    pitchVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    fvTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    dryhopDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },

    celleringDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    }
  });

  Stage2.associate = function(models) {
    Stage2.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Stage2;
};
