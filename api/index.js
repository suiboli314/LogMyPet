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

router.post("/api/signup", async (req, res) => {
  const user = await db.createUser(req, res);
  console.log("A user was inserted:", user);
  res.json(user);
});

export default router;
