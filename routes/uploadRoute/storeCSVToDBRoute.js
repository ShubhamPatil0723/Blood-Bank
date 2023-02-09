import express from "express";
import * as uploadController from "../../controllers/index.js";
import { uploader } from "../../middlewares/storeCSVToFile.js";

const uploadRouter = express.Router();

uploadRouter.post("/userdata", uploadController.uploadCSVToDB);
uploadRouter.post(
  "/userdata/s3/:userid",
  uploader.single("avatar"),
  uploadController.uploadImageToAws
);

export { uploadRouter };
