import "./loadEnvironment.js";
import { debug } from "console";
import { app } from "./server/index.js";
import chalk from "chalk";

export const clients: string = process.env.CLIENTS_URL!;
export const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  debug(chalk.blue(`Listening in port ${port}`));
});
