import express from "express";
import dotenv from "dotenv";
import { backupStoreRouter } from "./backupStoreRoute/storeRoute.js";
import { uploadRouter } from "./uploadRoute/storeCSVToDBRoute.js";

const Router = new express();
dotenv.config();

const { BASE_ROUTE } = process.env;

Router.use(`${BASE_ROUTE}/files`, uploadRouter);
Router.use(`${BASE_ROUTE}/files`, backupStoreRouter);

export { Router };
