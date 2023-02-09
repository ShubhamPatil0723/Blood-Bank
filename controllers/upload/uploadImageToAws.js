import fs from "node:fs";
import { logger } from "../../modules/fileLogger/index.js";
import { uploadFileToS3 } from "../../services/awsOps/awsS3Ops.js";

export const uploadImageToAws = async (req, res) => {
  const file = fs.readFileSync(
    `files/userProfile/${req.params.userid}_profile_avatar.png`,
    "utf-8"
  );

  const params = {
    Bucket: req.body.bucket,
    Key: `${req.params.userid}_profile_avatar.png`,
    Body: file,
  };

  try {
    const result = await uploadFileToS3(params);
    return res.status(200).json(result);
  } catch (error) {
    return logger.error(`AWS S3 Upload failed ${error}`);
  }
};
