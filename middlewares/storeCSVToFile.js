import multerS3 from "multer-s3";
import multer from "multer";
import { s3Client } from "../libs/S3Client.js";

const s3Storage = multerS3({
  s3: s3Client,
  bucket: "2000my-profile-image",
  metadata: (req, file, storeCB) => {
    storeCB(null, { fieldname: file.fieldname });
  },
  key: (req, file, changeNameCB) => {
    const fileName = `${req.params.userid}_profile_avatar.png`;
    changeNameCB(null, fileName);
  },
});

export const uploader = multer({ storage: s3Storage });
