const { DataTypes } = require("sequelize/types/query-types");

module.exports = (sequelize, DataTypes) => {
    const Korisnik = sequelize.define("Korisnik", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('mentor', 'student'),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('none', 'redovni', 'izvanredni'),
            allowNull: false
        }
    });

    Korisnik.associate = models => {
        Korisnik.hasOne(models.Upis, {
            foreignKey: "id",
            sourceKey: "student_id"
        });
    };
    return Korisnik;
};


