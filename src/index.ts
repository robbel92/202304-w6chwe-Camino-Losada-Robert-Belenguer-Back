import { debug } from "console";
import { app } from "./server";

export const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(`Listening in port ${port}`);
});
