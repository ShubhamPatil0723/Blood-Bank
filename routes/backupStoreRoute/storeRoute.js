import express from "express";
import * as controller from "../../controllers/backupStore/storeController.js";
const backupStoreRouter = express.Router();

backupStoreRouter.post("/users", controller.storeController);

export { backupStoreRouter };
