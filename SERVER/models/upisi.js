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
    });

    Upis.associate = models => {
        Upis.belongsTo(models.Korisnik, {
            foreignKey: "id",
            sourceKey: "student_id"
        });
        Upis.belongsTo(models.Predmet, {
            foreignKey: "id",
            sourceKey: "predmet_id"
        });
    };
    return Upis;
};
