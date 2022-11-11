import express from "express";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";
import config from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = config.PORT || 3000;

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "frontend/build")));

app.use("/", indexRouter);

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});

export default app;
