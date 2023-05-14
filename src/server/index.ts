import "../loadEnvironment.js";
import mongoose from "mongoose";
import express, { type Request, type Response } from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import robotsRouter from "./middelwares/routers/robots/robotsRouter.js";
import generalErrorMiddleware from "./middelwares/errorMiddlewares.js";

export const debug = createDebug("robots-api:root");

export const app = express();

app.disable("x-powered-by");

app.use((req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", [
    "http://localhost:5173/",
    "https://202304-w6chwe-camino-losada-front.netlify.app/",
  ]);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

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

app.use(generalErrorMiddleware);
