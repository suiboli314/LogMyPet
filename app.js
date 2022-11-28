import express from "express";
import session from "express-session";

import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import config from "./config.js";
import indexRouter from "./api/index.js";

import passport from "passport";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = config.PORT || 3000;

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      maxAge: 3000000 * 60,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve(__dirname, "frontend/build")));

app.use("/", indexRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});

export default app;
