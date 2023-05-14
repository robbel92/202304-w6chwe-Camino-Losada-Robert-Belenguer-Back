import "./loadEnvironment.js";
import { debug } from "console";
import { app } from "./server/index.js";
import chalk from "chalk";
import mongoose from "mongoose";

export const clients: string = process.env.CLIENTS_URL!;
export const port = process.env.PORT ?? 5000;

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

app.listen(port, () => {
  debug(chalk.blue(`Listening in port ${port}`));
});
