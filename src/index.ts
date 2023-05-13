import { debug } from "console";
import { app } from "./server/index.js";
import chalk from "chalk";

export const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(chalk.blue(`Listening in port ${port}`));
});
