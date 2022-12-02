import { Schema, model, ObjectId } from "mongoose";
import Trainer from "./trainer.model";

const CourseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  trainer: {
    type: ObjectId,
    ref: Trainer,
  },
});

const Course = model("Courses", CourseSchema);

export default Course;
