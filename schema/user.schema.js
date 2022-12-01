import joi from "joi";

const userSchema = joi.object({
  name: joi.string().min(2).max(100).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .regex(RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"))
    .required(),
});

const { error, value } = userSchema.validate(
  {},
  {
    messages,
  }
);

export default userSchema;
