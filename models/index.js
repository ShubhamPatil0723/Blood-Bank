import Sequelize, { DataTypes } from "sequelize";
import { generateModels } from "./generateModels.js";
const db = {};

const sequelizeInit = new Sequelize({
  dialect: "sqlite",
  storage: "./Dummy.sqlite3",
});

db.models = generateModels(sequelizeInit, DataTypes);
db.Sequelize = Sequelize;
db.sequelize = sequelizeInit;

export default db;
