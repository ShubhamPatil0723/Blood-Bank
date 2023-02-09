import winston from "winston";

const logConfig = {
  transports: [
    new winston.transports.File({ filename: "logs/backupStoreLogger.log" }),
  ],
};

const logger = winston.createLogger(logConfig);

export { logger };
