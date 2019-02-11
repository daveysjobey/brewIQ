module.exports = function(sequelize, DataTypes) {
  var Step2 = sequelize.define("Step2", {
    mashWaterVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    strikeTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    mashTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    allInTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    vorlofStartTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    lauterStartTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    spargeStartTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    spargeStopTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    lauterStopTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    spargeWaterVol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    kettleFullVol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    preboilGravity: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    boilStartTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    whirlpoolStartTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    whirlpoolStopTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    knockOutStart: {
      type: DataTypes.TIME,
      allowNull: false
    },

    knockOutStop: {
      type: DataTypes.TIME,
      allowNull: false
    },

    knockOutTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    o2Lpm: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    postboilGravity: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    yeastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    yeastGen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    pitchVol: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    fvTemp: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    dryhopDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    celleringDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });

  Step2.associate = function(models) {
    Step2.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Step2;
};
