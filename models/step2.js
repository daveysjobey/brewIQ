module.exports = function(sequelize, DataTypes) {
    var Step2 = sequelize.define("Step2", {
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
  
    Step2.associate = function(models) {
      Step2.belongsTo(models.Beer, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Step2;
  };