module.exports = function (sequelize, DataTypes) {
    var Step1 = sequelize.define("Step1", {

        ingredient_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        ingredient_1_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        ingredient_2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        ingredient_2_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        ingredient_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        ingredient_3_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        ingredient_4: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        ingredient_4_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        ingredient_5: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        ingredient_5_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },


        zinc_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        wirlfloc_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        CaCl2_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },
        CoSo4_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        hop_1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        hop_1_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        hop_1_boil: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        hop_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        hop_2_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        hop_2_boil: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        hop_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        hop_3_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        hop_3_boil: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        dryhop_1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        dryhop_1_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        dryhop_1_boil: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        dryhop_2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        dryhop_2_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        dryhop_2_boil: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        dryhop_3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        },

        dryhop_3_weight: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },

        dryhop_3_boil: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        vol_units: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        
        notes: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Step1.associate = function (models) {
        Step1.belongsTo(models.Beer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Step1;
};