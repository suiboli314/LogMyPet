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

export default router;
