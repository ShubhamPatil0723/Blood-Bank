import Sequelize, { DataTypes } from "sequelize";
import { generateModels } from "./generateModels.js";
const db = {};

const { MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;
const sequelizeInit = new Sequelize(
  "bloodbank",
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

db.models = generateModels(sequelizeInit, DataTypes);
db.Sequelize = Sequelize;
db.sequelize = sequelizeInit;

export default db;
