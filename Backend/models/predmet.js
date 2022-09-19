module.exports = (sequelize, DataTypes) => {
  const Predmet = sequelize.define("Predmet", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    ime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kod: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    program: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bodovi: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sem_redovni: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sem_izvanredni: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    izborni: {
      type: DataTypes.ENUM('da', 'ne'),
      allowNull: false
    }
  },
    {
      freezeTableName: true,
      tableName: 'Predmeti'
    });

  Predmet.associate = models => {
    Predmet.hasMany(models.Upis, {
      foreignKey: "predmet_id",
      sourceKey: "id"
    });
  };
  return Predmet;
};

