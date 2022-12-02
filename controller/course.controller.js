import Course from "../models/course.model";
import Trainer from "../models/trainer.model";
import User from "../models/users.model";

class CourseController {
  static getCourses = async (req, res) => {
    try {
      const { courseName } = req.query;
      let query = {};
      if (courseName) {
        query = {
          ...query,
          courseName: { $regex: RegExp(courseName), $options: "i" },
        };
      }
      const courseRes = await Course.find(query).populate("trainer");
      return res.send(courseRes);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  };

  static getCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const courseRes = await Course.findById(id).populate("trainer");
      return res.send(courseRes);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  };

  static addCourse = async (req, res) => {
    try {
      const { trainer, ...rest } = req.body;
      let trainerData = await Trainer.findOne({ name: trainer.name });
      if (!trainerData) {
        trainerData = new Trainer(trainer);
        await trainerData.save();
      }
      const courseData = new Course({ ...rest, trainer: trainerData._id });
      const courseRes = await courseData.save();
      const finalRes = await courseRes.populate("trainer");
      return res.send(finalRes);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  };

  static updateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const { trainer, ...rest } = req.body;

      const courseInfo = await Course.findById(id).populate("trainer");
      const updatedTrainer = await Trainer.findByIdAndUpdate(
        courseInfo.trainer._id,
        trainer,
        {
          new: true,
        }
      );

      const updatedCourse = await Course.findByIdAndUpdate(
        id,
        {
          ...rest,
          trainer: updatedTrainer,
        },
        {
          new: true,
        }
      );
      const finalRes = await updatedCourse.populate("trainer");
      return res.send(finalRes);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  };

  static deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      await Course.findByIdAndDelete(id);
      res.send("record deleted");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

export default CourseController;
