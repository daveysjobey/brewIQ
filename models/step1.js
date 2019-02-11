module.exports = function(sequelize, DataTypes) {
  var Step1 = sequelize.define("Step1", {
    ingredient1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    ingredient1Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    ingredient2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    ingredient2Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    ingredient3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },

    ingredient3Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient4: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },

    ingredient4Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    ingredient5: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },

    ingredient5Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true
    },

    zincWeight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    wirlflocWeight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
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
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    hop1Weight: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },

    hop1Boil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    hop2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
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
      allowNull: true,
      validate: {
        len: [1, 255]
      }
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
      allowNull: true,
      validate: {
        len: [1, 255]
      }
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
      allowNull: true,
      validate: {
        len: [1, 255]
      }
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
      allowNull: true,
      validate: {
        len: [1, 255]
      }
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
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Step1.associate = function(models) {
    Step1.belongsTo(models.Beer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Step1;
};
