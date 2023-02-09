import csvtojson from "csvtojson";
import db from "../../models/index.js";

const { models } = db;

export const uploadCSVToDB = async (req, res) => {
  const readFile = async (filePath) => {
    return await csvtojson().fromFile(filePath);
  };

  const jsonData = await readFile("files/userdata.csv");

  const promises = jsonData.map((userData) => {
    let modelInfo = {
      id: userData.ID,
      username: userData.Username,
      password: userData.Password,
    };
    if (userData.ID % 2 === 0) {
      try {
        models.EvenUserDetails.create(modelInfo);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        models.OddUserDetails.create(modelInfo);
      } catch (error) {
        console.log(error);
      }
    }
  });
  try {
    await Promise.all(promises);
    return res.status(200).json("Uploaded successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};
