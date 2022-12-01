import express from "express";

const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    if (req.headers.authorization) {
      next();
    }
    res.status(400).send("please proride token");
  },
  (req, res) => {
    res.send("products data");
  }
);

router.post("/", () => {});

router.put("/", () => {});

router.delete("/", () => {});

export default router;
