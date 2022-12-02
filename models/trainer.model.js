import { Schema, model } from "mongoose";

const trainerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  courses: {
    type: [String],
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length > 0;
      },
      message: (props) => `${props.value} is not a valid data!`,
    },
  },
});

const Trainer = model("trainers", trainerSchema);

export default Trainer;
