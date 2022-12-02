import express from "express";
import UserController from "../controller/user.controller";
import authMiddleware from "../middlewares/auth.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import userSchema from "../schema/user.schema";

const router = express.Router();

const users = [];

router.get("/", UserController.getUsers);

router.post("/");

router.put("/", () => {});

router.delete("/", () => {});

export default router;
