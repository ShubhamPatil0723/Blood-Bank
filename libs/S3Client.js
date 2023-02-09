import { S3Client } from "@aws-sdk/client-s3";

const { S3_REGION } = process.env;
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: S3_REGION,
});

export { s3Client };
