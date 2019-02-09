module.exports = function (sequelize, DataTypes) {
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
    batch_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brewer_name: {
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
    brew_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  });

  Beer.associate = function (models) {
    Beer.hasMany(models.Step1, {
      onDelete: "cascade"
    });
  };

  Beer.associate = function (models) {
    Beer.hasMany(models.Step2, {
      onDelete: "cascade"
    });
  };

  Beer.associate = function (models) {
    Beer.hasMany(models.Step3, {
      onDelete: "cascade"
    });
  };

  return Beer;
};