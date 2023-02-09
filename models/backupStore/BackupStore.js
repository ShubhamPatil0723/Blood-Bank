const tableName = "BackupStore";

export const BackupStore = (sequelize, Datatypes) => {
  const modelName = sequelize.define(tableName, {
    userId: {
      type: Datatypes.INTEGER,
    },
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Datatypes.STRING,
    },
  });
  return modelName;
};
