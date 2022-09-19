
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
    },
        {
            freezeTableName: true,
            tableName: 'Korisnici'
        }
    );

    Korisnik.associate = models => {
        Korisnik.hasOne(models.Upis, {
            foreignKey: "student_id",
            sourceKey: "id"
        });
    };
    return Korisnik;
};


