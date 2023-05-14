import "../loadEnvironment.js";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import robotsRouter from "./middelwares/routers/robots/robotsRouter.js";

export const debug = createDebug("robots-api:root");

export const app = express();

app.disable("x-powered-by");

app.use(morgan("combined"));

const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red("Missing environment variables. Exiting..."));
  process.exit(1);
}

try {
  await mongoose.connect(mongoDbConnection);
} catch (error: unknown) {
  debug(`Error connecting database ${(error as Error).message}`);
}

app.use("/robots", robotsRouter);
