import "../loadEnvironment.js";

import express from "express";
import morgan from "morgan";

import createDebug from "debug";

export const debug = createDebug("robots-api:root");

export const app = express();

app.disable("x-powered-by");

app.use(morgan("combined"));

app.use((_req, _res) => {
  debug("hola");
});
