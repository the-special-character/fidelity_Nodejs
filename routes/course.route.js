import express from "express";
import CourseController from "../controller/course.controller";

const courseRouter = express.Router();

courseRouter.get("/", CourseController.getCourses);
courseRouter.get("/:id", CourseController.getCourse);
courseRouter.post("/", CourseController.addCourse);
courseRouter.put("/:id", CourseController.updateCourse);
courseRouter.delete("/:id", CourseController.deleteCourse);

export default courseRouter;

// courseName
// duration
// trainer
