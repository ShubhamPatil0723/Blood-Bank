const tableName = "Bloodbank";

export const BloodBank = (sequelize, Datatypes) => {
  const modelName = sequelize.define(
    tableName,
    {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      warehouse_coords: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      blood_type: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      expiry: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
      availability: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
    },
    { timeStamp: false }
  );

  return modelName;
};
