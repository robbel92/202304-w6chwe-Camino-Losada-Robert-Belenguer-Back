import "../loadEnvironment.js";
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import chalk from "chalk";
import robotsRouter from "./middelwares/routers/robots/robotsRouter.js";
import generalErrorMiddleware from "./middelwares/errorMiddlewares.js";
import cors from "cors";
export const debug = createDebug("robots-api:root");

export const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://202304-w6chwe-camino-losada-front.netlify.app",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

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

app.use(generalErrorMiddleware);
