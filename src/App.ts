import express from "express";
import "reflect-metadata";
import { router } from "./controllers";

const app = express();
const appPort = process.env.APP_PORT ?? 3000;

app.use("/", router);

app.listen(appPort, () => {
  console.log(`Running on port ${appPort}`);
});
