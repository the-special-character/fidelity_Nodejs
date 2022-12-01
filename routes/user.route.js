import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import userSchema from "../schema/user.schema";

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post(
  "/",
  [express.json(), validationMiddleware(userSchema)],
  (req, res) => {
    console.log(req.body);
    const data = { ...req.body, id: new Date().valueOf() };
    users.push(data);
    res.send(data);
  }
);

router.put("/", () => {});

router.delete("/", () => {});

export default router;
