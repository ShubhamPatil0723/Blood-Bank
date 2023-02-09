import { CreateBucketCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../libs/S3Client.js";
import { logger } from "../../modules/fileLogger/index.js";

export const createS3Bucket = async (bucketName) => {
  try {
    const data = await s3Client.send(
      new CreateBucketCommand({ Bucket: bucketName })
    );
    return data;
  } catch (error) {
    logger.error(`${error}`);
  }
};

export const uploadFileToS3 = async (params) => {
  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    return data;
  } catch (error) {
    logger.error(`${error}`);
  }
};
