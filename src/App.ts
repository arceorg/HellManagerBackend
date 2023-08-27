import express from "express";
import { router } from "./controllers";

const app = express();

app.use("/", router);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
