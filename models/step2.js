module.exports = function (sequelize, DataTypes) {
    var Step2 = sequelize.define("Step2", {

        mash_water_vol: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        strike_temp: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        mash_temp: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        all_in_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        vorlof_start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        lauter_start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        sparge_start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        sparge_stop_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        lauter_stop_time: {
            type: DataTypes.TIME,
            allowNull: false
        },

        sparge_water_vol: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        kettle_full_vol: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        preboil_gravity: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        boil_start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        whirlpool_start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        whirlpool_stop_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        knock_out_start: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        knock_out_stop: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        knock_out_temp: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        o2_lpm: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        postboil_gravity: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        yeast_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        yeast_gen: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        pitch_vol: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        fv_temp: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },

        dryhop_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        cellering_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    });


    Step2.associate = function (models) {
        Step2.belongsTo(models.Beer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Step2;
};