import express from "express";
import CourseController from "../controller/course.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const courseRouter = express.Router();

courseRouter.get("/", authMiddleware(), CourseController.getCourses);
courseRouter.get("/:id", authMiddleware(), CourseController.getCourse);
courseRouter.post("/", authMiddleware("admin"), CourseController.addCourse);
courseRouter.put(
  "/:id",
  authMiddleware("admin"),
  CourseController.updateCourse
);
courseRouter.delete(
  "/:id",
  authMiddleware("admin"),
  CourseController.deleteCourse
);

export default courseRouter;

// courseName
// duration
// trainer
