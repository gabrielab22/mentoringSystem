module.exports = (sequelize, DataTypes) => {
    const Upis = sequelize.define("Upis", {
        student_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        predmet_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {

            freezeTableName: true,
            tableName: 'upisi'

        });

    Upis.associate = models => {
        Upis.belongsTo(models.Korisnik, {
            foreignKey: "student_id",
            sourceKey: "id"
        });
        Upis.belongsTo(models.Predmet, {
            foreignKey: "predmet_id",
            sourceKey: "id"
        });
    };
    return Upis;
};
