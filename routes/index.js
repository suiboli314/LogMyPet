import express from "express";

const router = express.Router();

router.get("/helloworld", () => {
  console.log("hello world");
});

export default router;
