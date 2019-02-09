module.exports = function(sequelize, DataTypes) {
    var Step3 = sequelize.define("Step3", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
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