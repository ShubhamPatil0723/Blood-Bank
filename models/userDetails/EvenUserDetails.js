const tableName = "EvenUserDetails";

export const EvenUserDetails = (sequelize, DataTypes) => {
  const modelName = sequelize.define(tableName, {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return modelName;
};
