import express from "express";
import morgan from "morgan";

import createDebug from "debug";

export const debug = createDebug("robots-api:root");

export const app = express();

app.use(morgan("dev"));
