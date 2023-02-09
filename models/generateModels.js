import { OddUserDetails } from "./userDetails/OddUserDetails.js";
import { EvenUserDetails } from "./userDetails/EvenUserDetails.js";
import { BackupStore } from "./backupStore/BackupStore.js";
import { BloodBank } from "./bloodBank/BloodBank.js";
import { Coordinate } from "./bloodBank/Coordinate.js";

const models = {};
export const generateModels = (sequelizeInit, DataTypes) => {
  models.OddUserDetails = OddUserDetails(sequelizeInit, DataTypes);
  models.EvenUserDetails = EvenUserDetails(sequelizeInit, DataTypes);
  models.BackupStore = BackupStore(sequelizeInit, DataTypes);
  models.BloodBank = BloodBank(sequelizeInit, DataTypes);
  models.Coordinate = Coordinate(sequelizeInit, DataTypes);
  return models;
};
