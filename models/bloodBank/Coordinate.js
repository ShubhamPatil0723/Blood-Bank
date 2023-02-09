const tableName = "Coordinate";

export const Coordinate = (sequelize, Datatypes) => {
  const modelName = sequelize.define(
    tableName,
    {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      city_code: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      warehouse_coords: {
        type: Datatypes.INTEGER,
        allowNull: false,
      },
      city: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
    },
    { timeStamp: false }
  );

  return modelName;
};
