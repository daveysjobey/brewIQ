module.exports = function (sequelize, DataTypes) {
    var Step3 = sequelize.define("Step3", {

        bright_tank: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        transfer_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        transfer_vol: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        keg_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        keg_vol: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        }
    });

    Step3.associate = function (models) {
        Step3.belongsTo(models.Beer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Step3;
};