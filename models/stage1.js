module.exports = function(sequelize, DataTypes) {
  var Stage1 = sequelize.define("Stage1", {
    ingredient1: {
      type: DataTypes.STRING,
      allowNull: true
    },

    ingredient1Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient2: {
      type: DataTypes.STRING,
      allowNull: true
    },

    ingredient2Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient3: {
      type: DataTypes.STRING,
      allowNull: true
    },

    ingredient3Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient4: {
      type: DataTypes.STRING,
      allowNull: true
    },

    ingredient4Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient5: {
      type: DataTypes.STRING,
      allowNull: true
    },

    ingredient5Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    zincWeight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    wirlflocWeight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    CaCl2Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },
    CoSo4Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    hop1: {
      type: DataTypes.STRING,
      allowNull: true
    },

    hop1Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    hop1Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    hop2: {
      type: DataTypes.STRING,
      allowNull: true
    },

    hop2Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    hop2Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    hop3: {
      type: DataTypes.STRING,
      allowNull: true
    },

    hop3Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    hop3Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    dryhop1: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dryhop1Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    dryhop1Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    dryhop2: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dryhop2Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    dryhop2Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    dryhop3: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dryhop3Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    dryhop3Boil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    volUnits: {
      type: DataTypes.STRING,
      allowNull: true
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Stage1.associate = function(models) {
    Stage1.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Stage1;
};
