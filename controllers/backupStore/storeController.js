import axios from "axios";
import db from "../../models/index.js";
import { logger } from "../../modules/fileLogger/index.js";

const { models } = db;
export const storeController = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const albums = response.data;

    const uploadAlbumsPromises = albums.map((album) => {
      const albumObj = {
        userId: album.userId,
        id: album.id,
        title: album.title,
      };
      return models.backupStore.create(albumObj);
    });
    try {
      const result = await Promise.all(uploadAlbumsPromises);
      res.status(200).json(result);
    } catch (error) {
      logger.error(error);
      res.status(500).send("Upload failed");
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send("External JSON API failed");
  }
};
