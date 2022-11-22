import express from "express";
import db from "../db/index.js";

const router = express.Router();

router.get("/api/helloworld", (req, res) => {
  console.log("hello world");
  res.json("hello world");
});

router.get("/api/pets", async (req, res) => {
  const page = req.body.page;
  const pets = await db.getPets(page);

  console.log("pets", pets);
  res.json(pets);
});

router.get("/api/getCurrUser", db.userAuthStatus);
router.post("/api/signup", db.createUser);
router.post("/api/login", db.authenticate);

export default router;
