import express from "express";
import UserController from "../controller/user.controller";
import validation from "../middlewares/validation.middleware";
import { loginSchema, registerSchema } from "../schema/user.schema";

const authRouter = express.Router();

authRouter.post("/login", validation(loginSchema), UserController.login);

authRouter.post(
  "/register",
  validation(registerSchema),
  UserController.register
);

export default authRouter;

// courseName
// duration
// trainer
