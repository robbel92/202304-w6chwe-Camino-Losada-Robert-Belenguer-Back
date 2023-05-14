import "../loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import robotsRouter from "./middelwares/routers/robots/robotsRouter.js";
import generalErrorMiddleware, {
  notFoundError,
} from "./middelwares/errorMiddlewares.js";
import cors from "cors";
export const debug = createDebug("robots-api:root");

const allowedOrigins = [
  "http://localhost:5173",
  "https://202304-w6chwe-camino-losada-robert-be.netlify.app",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
export const app = express();

app.use(cors(options));

app.use(express.json());

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use("/robots", robotsRouter);
app.use(notFoundError);

app.use(generalErrorMiddleware);
